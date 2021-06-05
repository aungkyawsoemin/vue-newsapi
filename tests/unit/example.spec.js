// Libraries
import Vue from 'vue'
import Vuetify from 'vuetify'

// Components
import AppSnackbar from '@/components/AppSnackbar'

// Utilities
import { createLocalVue, mount } from '@vue/test-utils'

describe('AppSnackbar.vue', () => {
  const localVue = createLocalVue()
  let vuetify

  beforeEach(() => {
    vuetify = new Vuetify()
  })

  it('should have a custom title and match snapshot', () => {
    const wrapper = mount(AppSnackbar, {
      localVue,
      vuetify,
    })

    // With jest we can create snapshot files of the HTML output
    expect(wrapper.html()).toMatchSnapshot()

    // We could also verify this differently
    // by checking the text content
    const title = wrapper.find('.v-card__title > span')

    expect(title.text()).toBe('Foobar')
  })
})
