import { mount, shallowMount} from '@vue/test-utils'

import Home from '@/views/Home.vue'
import { _axios } from '../../src/plugins/axios'


describe('Home.vue', () => {
	it('Test compoenent Props values', async () => {
		const wrapper = await shallowMount(Home, {
			mock: {
				$axios: _axios
			}
		})
		// Wait unit the data does not load.
		await new Promise((reslove) => {
			setInterval(() => {
				if (wrapper.vm.fetching === false) {
					reslove();
				}
			}, 500)
		})
		await wrapper.vm.$nextTick()
		expect(wrapper.findAll('.progress-bar-item').length).toBe(wrapper.vm.progressData.bars.length);
		expect(wrapper.findAll('.button').length).toBe(wrapper.vm.progressData.buttons.length);
		expect(wrapper.findAll('select option').length).toBe(wrapper.vm.progressData.bars.length);
		const old_value = wrapper.vm.progressData.bars[0]
		const first_btn_value = wrapper.vm.progressData.buttons[0]
		wrapper.findAll('button').at(0).trigger('click')
		wrapper.vm.progressData.bars[0] = (old_value + first_btn_value)
		expect(wrapper.vm.progressData.bars[0]).toBe(old_value + first_btn_value)
	})
})