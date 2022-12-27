import { defineStore } from 'pinia'
import { getCartList, deleteCartList, putCartList } from "@/api/index.js";
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
        //获取购物车列表数据
        getCartListAsync() {
            //发送Ajax请求，获取购物车列表数据
            getCartList().then(
                data => {
                    this.changeCartList(data.data || [])
                }
            )
        },
        //删除购物车列表数据
        async deleteCartListAsync(id) {
            let res = await deleteCartList(id)
            if (res.resultCode == 200) {
                //重新获取购物车列表数据
                this.getCartListAsync()
            }
        },
        //购物车步进器
        async putCartListAsync(cartItemId, goodsCount) {
            let res = await putCartList(cartItemId, goodsCount)
            if (res.resultCode == 200) {
                //重新获取购物车列表数据
                this.getCartListAsync()
            }
        }
    },
    getters: {
        cartNum() {
            return this.cartList.reduce((prev, next) => {
                return prev + next.goodsCount
            }, 0)
        }
    }
})