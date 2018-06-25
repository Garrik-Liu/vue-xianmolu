<template>
    <div class="container">
        <h1>神魔录</h1>
        <ul class="list">
            <a href="#"><li>初</li></a>
            <a href="#"><li>序</li></a>
            <a href="#"><li>离</li></a>
        </ul>
    </div>
</template>
<script>
    
export default {
    data() {
        return {}
    }
}
</script>
<style scoped>
    .container {
        display: column;
        align-items: center;
    }

    .list {
        list-style: none;
    }

    .list > a {
        text-decoration: none;
        color: #222;
    }

    .list li {
        font-size: 20px;
    }

    .list > a:hover {
        color: yellowgreen;
    }

    .list > a:active {
        color: red;
    }
</style>
