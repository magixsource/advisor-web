import { Component } from 'react'
import { View, Text, Image, Swiper, SwiperItem } from '@tarojs/components'
import { AtButton,AtSearchBar,AtGrid,AtList, AtListItem   } from 'taro-ui'

import "taro-ui/dist/style/components/search-bar.scss"
import "taro-ui/dist/style/components/button.scss" // 按需引入
import "taro-ui/dist/style/components/icon.scss";
import "taro-ui/dist/style/components/article.scss";
import "taro-ui/dist/style/components/flex.scss";
import "taro-ui/dist/style/components/grid.scss";
import "taro-ui/dist/style/components/list.scss";
import './index.scss'


export default class Index extends Component {

  constructor () {
    super(...arguments)
    this.state = {
      searchValue: ''
    }
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  onChange (value) {
    this.setState({
      searchValue: value
    })
  }

  render () {
    return (
      <View className='index'>
        <View>
          <AtSearchBar
            value={this.state.searchValue}
            onChange={this.onChange.bind(this)}
          />
        </View>
        <View>
          <Swiper
            className='test-h'
            indicatorColor='#999'
            indicatorActiveColor='#333'
            vertical
            circular
            indicatorDots
            autoplay>
            <SwiperItem>
              <View className='demo-text-1'>
                <Image
                style='width: 300px;height: 100px;background: #fff;'
                src='https://storage.360buyimg.com/jdc-article/fristfabu.jpg'
              />
              </View>
            </SwiperItem>
            <SwiperItem>
              <View className='demo-text-2'>
                <Image
                style='width: 300px;height: 100px;background: #fff;'
                src='https://storage.360buyimg.com/jdc-article/welcomenutui.jpg'
              />
              </View>
            </SwiperItem>
            <SwiperItem>
              <View className='demo-text-3'>
                <Image
                  style='width: 300px;height: 100px;background: #fff;'
                  src='https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg'
                />
              </View>
            </SwiperItem>
          </Swiper>
          </View>
          <View className="primary_container">
            <View className='at-row'>
              <View className='at-col at-col-10'>猜你喜欢</View>
              <View className='at-col at-col-2'>更多></View>
            </View>
            
            <AtList>
              <AtListItem
                title='火煮黄狗'
                arrow='right'
                thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'
              />
              <AtListItem
                title='烤烧茄汁'
                note='描述信息'
                arrow='right'
                thumb='http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'
              />
              <AtListItem
                title='红烧牛肉'
                note='描述信息'
                extraText='详细信息'
                arrow='right'
                thumb='http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png'
              />
            </AtList>
            
          </View>
      </View>
    )
  }
}
