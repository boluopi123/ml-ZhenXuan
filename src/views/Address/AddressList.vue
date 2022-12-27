<template>
  <van-nav-bar
    title="地址管理"
    left-text="返回"
    right-text="按钮"
    left-arrow
    @click-left="onClickLeft"
    @click-right="onClickRight"
  >
    <template #right>
      <van-icon name="ellipsis" />
    </template>
  </van-nav-bar>
  <van-address-list
    v-model="address.chosenAddressId"
    :list="address.list"
    default-tag-text="默认"
    @add="onAdd"
    @edit="onEdit"
  />
</template>

<script setup>
import { onMounted, reactive } from "vue";
import { showToast } from "vant";
import { getAddressList } from "@/api/index.js";
import { useRouter } from "vue-router";
let router = useRouter();

const onClickLeft = () => history.back();
const onClickRight = () => showToast("按钮");

let address = reactive({
  list: [], //地址列表数据源
  chosenAddressId: "", //选择的那个地址
});
onMounted(() => {
  getData().then(() => {
    let res = address.list.filter((item) => item.isDefault == true);

    if (res.length != 0) {
      address.chosenAddressId = res[0].id;
    }
  });
});
async function getData() {
  await getAddressList().then((res) => {

    address.list = res.data.map((item) => {
      return {
        id: item.addressId,
        name: item.userName,
        tel: item.userPhone,
        address:
          item.provinceName +
          item.cityName +
          item.regionName +
          item.detailAddress,
        isDefault: item.defaultFlag,
      };
    });
  });
}

let onAdd = () => {
  router.push("/AddressAddAndEdit");
};
let onEdit = (item) => {
  router.push("/AddressAddAndEdit?addressId=" + item.id);
};
</script>