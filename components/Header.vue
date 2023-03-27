<template>
    <div class="flex justify-between header ">
        <div class="pl-5 flex justify-start items-center  w-full">
            <logo  class=" h-full  pr-2"/>
            <div class="main_navbar  w-full">
                <div class="top_navbar nav-border">
                    <ul class="flex justify-start p-0 items-center">
                        <li class="pt-[15px] pb-[12px] px-8 text-[#939393] text-[16px]"><nuxt-link to="/">About </nuxt-link></li>
                        <li class="pt-[15px] pb-[12px] px-8 text-[#939393] text-[16px]"><nuxt-link to="/">Partners</nuxt-link></li>
                        <li class="pt-[15px] pb-[12px] px-8 text-[#939393] text-[16px]"><nuxt-link to="/">Success stories</nuxt-link></li>
                    </ul>
                </div>
                <div class="content_navbar pb-3">
                    <ul class="flex justify-start p-0 items-center">
                        <li class="pt-[15px] pb-[12px] px-8 text-[#333333] font-medium text-[16px]"><nuxt-link to="/">Products</nuxt-link></li>
                        <li class="pt-[15px] pb-[12px] px-8 text-[#333333] font-medium text-[16px]"><nuxt-link to="/">Blog</nuxt-link></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="nav_action flex justify-start p-5  items-center">
            <div class="login px-9  text-[#333333] font-medium text-[16px]">
                Login
            </div>
            <div class="request w-[135px] m-auto  text-[#333333] font-medium text-[16px] bg-[#FFD100] text-center rounded py-2">
                Request Demo
            </div>
        </div>

    </div>
</template>

<script setup>

</script>

<style  scoped>
.header{
    border-bottom: 1px solid  rgb(147 147 147 / 20%);
}
.main_navbar{

    border-left: 1px solid  rgb(147 147 147 / 20%);
    border-right: 1px solid  rgb(147 147 147 / 20%);
}
.nav-border{
    border-bottom: 1px solid  rgb(147 147 147 / 20%);
}

</style>