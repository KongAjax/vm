<template>
    <page>
        <vm-topbar :left-enabled="false">vm</vm-topbar>

        <vm-scroll class="navs">
            <a href="javascript:" v-for="item of source" :key="item" @click="go(item)">{{item}}</a>
        </vm-scroll>
    </page>
</template>

<style scoped lang="less">

    header{
        padding: 0px 10px;
        height: 50px;
        line-height: 50px;
        font-weight: bold;
        border-bottom: 1px solid #ccc;
    }

    .main{
        display: flex;
        flex: 1;
    }

    .navs{
        a{
            height: 40px;
            line-height: 40px;
            padding: 0px 10px;
            display: block;
            text-decoration: none;
            color: #333;
            border-bottom: 1px solid #eee;
        }
    }
</style>

<script>
import {
    List,
    Page,
    Topbar
} from 'vm';

export default {
    components: {
        List,
        Page
    },

    data () {
        return {
            source: [
                'components/page',
                'components/layout',
                'components/button',
                'components/segment',
                'components/forward',
                'components/popup',
                'components/alert',
                'components/toast',
                'components/scroll',
                'components/list',
                'components/actionsheet',
                'components/dropdown',
                'components/search',
                'components/searchbar',
                'components/uploader',
                'components/popover',
                'components/form',
                'components/swiper',
                'components/tabs',
                'components/badge',
                'components/filter',
                'components/switch',
                'components/datepick',
                'directives/badge',
                'directives/lazyload',
                'directives/draggable'
            ]
        };
    },
    watch: {

    },
    methods: {
        go (url) {
            this.$router.push(url);
        }
    }
};
</script>