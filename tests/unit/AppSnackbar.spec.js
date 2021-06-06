import Vuetify from 'vuetify'

import AppSnackbar from '@/components/AppSnackbar'

import { createLocalVue, mount } from '@vue/test-utils'

describe('AppSnackbar.vue', () => {
  const localVue = createLocalVue()
  let vuetify

  beforeEach(() => {
    vuetify = new Vuetify()
  })

  it('should have a custom title', () => {
    const wrapper = mount(AppSnackbar, {
      localVue,
      vuetify,
    })

    const title = wrapper.find('.v-subheader')

    expect(title.text()).toBe('Sources')
  })
})
