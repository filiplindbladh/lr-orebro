<template>
    <div>
        <lr-menu></lr-menu>
        <div class="section">
            <div class="card">
                <div class="card-content">
                   <iframe src="https://apps.fortnox.se/fs/fs/login.php" width="400px" height="100%">
                    </iframe>
                </div>
            </div> 
        </div>
    </div>
</template>
<script>
import lrMenu from '@/components/lrMenu.vue'
export default {
  name: 'Fortnox',
  components: {
    lrMenu
  }
}
</script>
<style scoped lang="scss">
@import '../style/main.scss';
.section {
    margin-top:67px; 
    display: flex;
    justify-content: center; 
    align-items:center; 
}
.card, .card-content {
    height:500px;
}

/* ****************** MEDIAQUERIES ****************** */
@media screen and (max-width: $tablet - 1px) {
   iframe {
       width:100%; 
   }
}
</style>
