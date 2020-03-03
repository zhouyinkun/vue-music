<template>
    <div class="progress-bar" @click="progressClick" ref="progressBar">
        <div class="bar-box">
            <div class="progress" ref="progress"></div>
            <div 
            class="progress-btn-box" ref="progressBtn"
            @touchstart.prevent="progressTouchStart"
            @touchmove.prevent="progressTouchMove"
            @touchend.prevent="progressTouchEnd">
                <div class="progress-btn"></div>
            </div>
        </div>
    </div>
</template>

<script>
const progressBtnWidth = 16
export default {
    props:{
        percent: {
            type: Number,
            default: 0
        }
    },
    watch:{
        percent(){
            if(this.percent>=0 && !this.touch.signal){
                const barWidth = this.$refs.progressBar.clientWidth - progressBtnWidth
                const offsetWidth = barWidth * this.percent
                this.$refs.progress.style.width = `${offsetWidth}px`
                this.$refs.progressBtn.style.transform = `translate3d(${offsetWidth}px,0,0)`
            }
        }
    },
    created(){
        this.touch = {}
    },
    methods:{
        progressTouchStart(e){
            this.touch.signal = true
            this.touch.startX = e.touches[0].pageX
            this.touch.left = this.$refs.progress.clientWidth
        },
        progressTouchMove(e){
            if(!this.touch.signal){
                return
            }
            const deltaX = e.touches[0].pageX - this.touch.startX
            const offsetWidth = Math.min(this.$refs.progressBar.clientWidth-progressBtnWidth,
                                Math.max(0,this.touch.left + deltaX))
            this.$refs.progress.style.width = `${offsetWidth}px`
            this.$refs.progressBtn.style.transform = `translate3d(${offsetWidth}px,0,0)`
        },
        progressTouchEnd(e){
            this.touch.signal = false
            this.resetPercent()
        },
        resetPercent(){
            const barWidth = this.$refs.progressBar.clientWidth - progressBtnWidth
            const percent = this.$refs.progress.clientWidth / barWidth
            this.$emit('percentChange',percent)
        },
        progressClick(e){
            this.$refs.progress.style.width = `${e.offsetX}px`
            this.$refs.progressBtn.style.transform = `translate3d(${e.offsetX}px,0,0)`
            this.resetPercent()
        }
    }
}
</script>

<style lang="stylus" scoped>
@import "~common/stylus/variable"
.progress-bar
    height 30px
    .bar-box
        position relative
        top 13px
        height 4px
        background rgba(0,0,0,0.3)
        .progress
            position absolute
            height 100%
            background $color-theme
        .progress-btn-box
            position absolute
            left -8px
            top -13px
            width 30px
            height 30px
            .progress-btn
                position absolute
                top 7px
                left 7px
                box-sizing border-box
                width 16px
                height 16px
                border-radius 50%
                border 5px solid $color-theme-l
                background $color-theme

</style>