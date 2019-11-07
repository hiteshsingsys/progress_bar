import { mount, shallowMount} from '@vue/test-utils'
import ProgressBar from '@/components/ProgressBar.vue'

describe('ProgressBar.vue', () => {
    let changeValueInInterval
    let progressWatch

    beforeAll(() => {
      changeValueInInterval = jest.spyOn(ProgressBar.methods, 'changeValueInInterval')
      progressWatch = jest.spyOn(ProgressBar.watch.progress, 'handler')
    })
    afterEach(() => {
      changeValueInInterval.mockClear()
      progressWatch.mockClear()
    })
  it('Test compoenent Props values', () => {
    const progress = 90
    const max = 100
    const speed = 1
    const wrapper = shallowMount(ProgressBar, {
      propsData: { progress, max , speed},
    })
    expect(wrapper.props().progress).toEqual(progress)
    expect(wrapper.props().max).toEqual(max)
    expect(wrapper.props().speed).toEqual(speed)
  })

  it('test is watch function call', () => {
        
    const progress = 90
    const max = 100
    const speed = 0.5
    mount(ProgressBar, {
      propsData: { progress, max , speed},
    })      
    expect(progressWatch).toHaveBeenCalledWith(progress);
    expect(changeValueInInterval).toHaveBeenCalledWith(progress);
  })
  it('Test default value', () => {
    const wrapper = shallowMount(ProgressBar)
    expect(wrapper.props().height).toEqual(30)
    expect(wrapper.props().progress).toEqual(0)
    expect(wrapper.props().max).toEqual(100)
    expect(wrapper.props().speed).toEqual(0.5)
  })

  it('When progress value is over from max value then over should be added', async () => {
        const progress = 101
        const max = 100
        const speed = 0.5
        const wrapper = mount(ProgressBar, {
          propsData: { progress, max , speed},
        })
        console.log('Hee....')

        await new Promise((reslove) => {
            setInterval(() => {
                if (wrapper.vm.animatedNumber === progress.toFixed(0)) {
                    reslove();
                }
            }, 500)
        })
        await wrapper.vm.$nextTick()
        expect(wrapper.findAll('.over').length).toBe(1);
  })

  it('When progress value is equal to max value', async () => {
        const progress = 100
        const max = 100
        const speed = 0.5
        const wrapper = mount(ProgressBar, {
          propsData: { progress, max , speed},
        })
        await new Promise((reslove) => {
            setInterval(() => {
                if (wrapper.vm.animatedNumber === progress.toFixed(0)) {
                    reslove();
                }
            }, 500)
        })
        await wrapper.vm.$nextTick()
        expect(wrapper.findAll('.completed').length).toBe(1);
  })

})
