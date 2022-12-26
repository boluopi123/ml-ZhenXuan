import { defineStore } from 'pinia'
import { getCartList } from "@/api/index.js";
export const useCart = defineStore('cartStore', {
    state: () => {
        return {
            cartList: []//购物车列表数据
        }
    },
    actions: {
        //给购物车每个商品添加checked选项
        changeCartList(list) {
            this.cartList = list.map(item => {
                item.checked = true
                return item
            })
        },
        getCartListAsync() {
            //发送Ajax请求，获取购物车列表数据
            getCartList().then(
                data => {
                    this.changeCartList(data.data || [])
                }
            )
        },
    },
    getters: {
        cartNum() {
            return this.cartList.reduce((prev, next) => {
                return prev + next.goodsCount
            }, 0)
        }
    }
})