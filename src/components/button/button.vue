<template>
    <button href="javascript:" :class="className" :disable="type == 'disable'" @click="$emit('click')"><slot></slot></button>
</template>

<style lang="less">
    .vmui-button{
        min-width: 1rem;
        text-align: center;
        font-size: .16rem;
        line-height: .48rem;
        height: .48rem;
        border-radius: 1rem;
        box-sizing: border-box;
        color: #fff;
        background: rgb(249, 104, 84);
        display: inline-block;
        border: 0px;
        text-decoration: none;
        -webkit-tap-highlight-color: transparent;
        outline: none;
    }

    .vmui-button-main:active{
        background: rgb(199, 83, 67);
    }

    .vmui-button-main.vmui-button-border{
        background: #fff;
        color: rgb(249, 104, 84);
        border: 1px solid rgb(249, 104, 84);
    }

    .vmui-button-success{
        background: rgb(98, 129, 194);

        &:active{
            background: rgb(78, 103, 155);
        }
    }

    .vmui-button-success.vmui-button-border{
        color: rgb(98, 129, 194);
        background: #fff;
        border: 1px solid rgb(98, 129, 194);

        &:active{
            background: rgb(170, 186, 218);
        }
    }

    .vmui-button-drak{
        background: #3B4263;

        &:active{
            background: rgb(47, 52, 79);
        }
    }

    .vmui-button-drak.vmui-button-border{
        background: #fff;
        border: 1px solid rgb(180, 180, 180);  
        color: rgb(85, 85, 85);

        &:active{
            background: rgb(225, 225, 225);
        }
    }

    .vmui-button-disable{
        border: 0 !important;
        color: #fff !important;
        background: #e1e1e1 !important;
    }

    .vmui-button-small{
        font-size: 0.14rem;
        height: 0.32rem;
        line-height: 0.32rem;
    }

    .vmui-button-square{
        border-radius: 0px;
    }
</style>

<script>
    export default{
        name: 'button',

        props: {
            type: {
                type: String,
                default: 'main'
            },

            small: {
                type: Boolean,
                default: false
            },

            square: {
                type: Boolean,
                default: false
            },

            border: {
                type: Boolean,
                default: false
            },

            class: {
                type: String,
                default: null
            }
        },

        data(){
            return {
                className: this.class
            }
        },

        mounted(){
            if(this.class) return ;

            var {border, square, small} = this;
            var className = ['vmui-button', 'vmui-button-' + this.type];

            small && className.push('vmui-button-small');
            border && className.push('vmui-button-border');
            square && className.push('vmui-button-square');

            this.className = className.join(' ');
        }
    }
</script>