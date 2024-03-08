import IndexPage from 'src/pages/IndexPage.vue'
import { shallowMount } from '@vue/test-utils'

describe('IndexPage', () => {
  it('should render correct contents', () => {
    const wrapper = shallowMount(IndexPage)
    let header = wrapper.find('.htmlClass h1')
    expect(header.exists()).toBe(true)
    expect(header.text())
      .toBe('Vue is awesome.')
  })

test('Name Chanannaphat Singkhal 6404101357 available on file',() => {
  const wrapper = shallowMount(FunctionPage)
  expect(wrapper.find('form > input').exists("Chanannaphat","Singkhal","6404101357")).toBe(true)
})

  it('check text content to be as defined in variable', () => {
    const wrapper = shallowMount(IndexPage, {
      data () {
        return {
          title: 'I love Vue.'
        }
      }
    })
    let header = wrapper.find('.htmlClass h1')
    expect(header.text()).toBe('I love Vue.')
  })

})


