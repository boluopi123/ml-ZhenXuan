<template>
  <!-- 头部 -->
  <van-nav-bar
    :title="id ? '编辑地址' : '新增地址'"
    left-arrow
    @click-left="$router.back()"
  >
    <template #right>
      <van-icon name="ellipsis" />
    </template>
  </van-nav-bar>
  <!-- 表单 -->
  <van-address-edit
    :address-info="info"
    :area-list="areaList"
    :show-delete="id ? true : false"
    show-set-default
    :area-columns-placeholder="['请选择', '请选择', '请选择']"
    @save="onSave"
    @delete="onDelete"
  />
</template>

<script setup>
import { areaList } from "@vant/area-data";
import {
  addAddress,
  getAddressDetail,
  updateAddress,
  removeAddress,
} from "@/api/index.js";
import { showToast } from "vant";
import { useRouter, useRoute } from "vue-router";
import { ref } from "vue";
//info表示地址详情
let info = ref({});
const router = useRouter();
const route = useRoute();
let id = route.query.addressId;
if (id) {
  getDetail();
}
const getAreaCode = (area) => {
  area = area.replace(/区|县/, "");
  for (let k in areaList.county_list) {
    if (areaList.county_list[k].includes(area)) {
      return k;
    }
  }
};
async function getDetail() {
  let { data } = await getAddressDetail(id);
  info.value = {
    id: data.addressId,
    name: data.userName,
    tel: data.userPhone,
    province: data.provinceName,
    city: data.cityName,
    county: data.regionName,
    addressDetail: data.detailAddress,
    areaCode: getAreaCode(data.regionName),
    isDefault: data.defaultFlag ? true : false,
  };
}
//新增或保存
let onSave = (obj) => {
  let option = {
    cityName: obj.city,
    defaultFlag: obj.isDefault ? 1 : 0,
    detailAddress: obj.addressDetail,
    provinceName: obj.province,
    regionName: obj.county,
    userName: obj.name,
    areaCode: obj.areaCode,
    postalCOde: "",
    userPhone: obj.tel,
  };
  if (id) {
    updateAddress({ ...option, addressId: id }).then((res) => {
      if (res.resultCode === 200) {
        showToast("编辑成功");
        router.push("/addressList");
      }
    });
  } else {
    addAddress({ ...option }).then((res) => {
      if (res.resultCode === 200) {
        showToast("新增成功");
        router.push("/addressList");
      }
    });
  }
};
//删除
let onDelete = (obj) => {
  removeAddress(obj.id).then((res) => {
    if (res.resultCode === 200) {
      showToast("删除成功");
      setTimeout(() => {
        router.back();
      }, 500);
    }
  });
};
</script>