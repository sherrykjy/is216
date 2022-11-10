<template>
    <table>
        <tr v-for="row in rows" :key="row" :id="row-`${row}`">
            <td v-for="col in cols" :key="col" :id="`${row}-${col}`" :class="this.nodes[row]">
            </td>
        </tr>
    </table>
</template>

<script>
export default {
    data() {
        return {
            width: null,
            rows: 31,
            cols: null,
            isStart: null,
            isEnd: null,
            nodes: []
        }
    },
    name: 'boardGrid',
    // methods: {
    //     getClass(coord) {
    //     if (coord == this.isStart) {
    //         return 'start'
    //         }
    //     else if (coord == this.isEnd){
    //         return 'end'
    //         }
    //     else {
    //         return 'norm'
    //         }
    //     }
    // },
    async created() {
        this.width = window.innerWidth
        this.cols = Math.floor(this.width*0.9/25)
        this.isStart = [16,Math.floor(this.cols/5)]
        this.isEnd = [16,Math.floor(this.cols*4/5)]
        for (let row = 0; row < this.rows; row++){
            const currentRow = []
            for (let col = 0; col <this.cols; col++){
                var currentNode = 'norm'
                if (row == this.isStart[0] && col == this.isStart[1]){
                    currentNode = 'start'
                }
                else if (row == this.isEnd[0] && col == this.isEnd[1]){
                    currentNode = 'fin'
                }
                currentRow.push(currentNode)
            }
            this.nodes.push(currentRow)
        }
        // console.log(this.isStart)
        // console.log(this.isEnd)
        console.log(typeof this.nodes[0])
        console.log(this.nodes[0])

    },
    // computed: {
    //     getClass(r, c){
    //         return this.nodes[r][c]
    //     }
    // },
    watch: {
        cols(){
            this.isStart = [16,Math.floor(this.cols/5)]
            this.isEnd = [16,Math.floor(this.cols*4/5)]
            const intermediate = []
            for (let row = 0; row < this.rows; row++){
                const currentRow = []
                for (let col = 0; col <this.cols; col++){
                    var currentNode = 'norm'
                    if (row == this.isStart[0] && col == this.isStart[1]){
                        currentNode = 'start'
                    }
                    else if (row == this.isEnd[0] && col == this.isEnd[1]){
                        currentNode = 'fin'
                    }
                    currentRow.push(currentNode)
                }
                intermediate.push(currentRow)
            }
            this.nodes = intermediate
            console.log(this.isStart)
            console.log(this.isEnd)
            },
        nodes(){
            console.log(this.nodes)
            console.log(this.nodes[0][0])
        }
    },
    mounted() {
        window.onresize = () => {
            this.width = window.innerWidth
            this.cols = Math.floor(0.9*window.innerWidth/25)
        }

    }
};
</script>

<style scoped>
        @import '@/assets/styling/algoStyler.css';

</style>