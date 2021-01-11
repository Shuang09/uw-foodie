import React from 'react'
import Enzyme from './enzyme_config';
import Example from './enzyme.js'

const {shallow,mount,render}=Enzyme

describe('Enzyme shallow', function () {
    it('Example component', function () {
        const name='按钮名'
        let app = shallow(<Example text={name} />)
        let btnName= app.find('button').text()
        // console.log('button Name:'+btnName)
    })
})


describe('Enzyme mount的DOM渲染（Full DOM Rendering）中', function () {
    it('Example组件中按钮的名字为子组件Sub中span的值', function () {
      const name='按钮名'
      let app = mount(<Example text={name} />)
  
      const buttonObj=app.find('button')
      const spanObj=app.find('span')
  
    //   console.info(`查找到button的个数：${buttonObj.length}`)
    //   console.info(`查找到span的个数：${spanObj.length}`)
  
    //  buttonObj.text(),spanObj.text()
    })


    test('Example render', function () {
        const name='按钮名'
        let app = render(<Example text={name} />)

        const buttonObj=app.find('button')
        const spanObj=app.find('span')

        // console.info(`查找到button的个数：${buttonObj.length}`)
        // console.info(`查找到span的个数：${spanObj.length}`)

        // buttonObj.text(),spanObj.text()
    })
  })