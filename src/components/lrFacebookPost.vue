<template>
    <div class="facebookBannerContainer">
         <div class="facebookBanner">
             <iframe id="iframe" src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2F20531316728%2Fposts%2F10154009990506729%2F&width=500&show_text=true&appId=310732159388781&height=290" width="500" height="290" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe>
             <div class="fb-post" data-href="https://www.facebook.com/20531316728/posts/10154009990506729/" data-width="100%" data-show-text="true">
                <blockquote cite="https://www.facebook.com/20531316728/posts/10154009990506729/" class="fb-xfbml-parse-ignore">
                    Publicerat av 
                    <a href="https://www.facebook.com/facebook/">Facebook</a>&nbsp;
                    <a href="https://www.facebook.com/20531316728/posts/10154009990506729/">
                        den 27 augusti 2015
                    </a>
                </blockquote>
            </div>
        </div>
    </div>
</template>
<script>
  export default {
    name: 'lrFacebookPost'
  }
</script>

<style lang="scss">
 .facebookBanner {
        width:100%;
        height:auto;
        display:-webkit-box;
        display:-ms-flexbox;
        display:flex;
        -webkit-box-pack:center;
            -ms-flex-pack:center;
                justify-content:center;
        -webkit-box-align:center;
            -ms-flex-align:center;
                align-items:center;
        background-color:$grey;
        #iframe {
            margin:40px;
        }
        .fb-post {
            display:none;
        }
    }
    @media screen and (max-width: 599px) {
        .facebookBanner {
            .fb-post {
                display:block;
                margin:20px;
            }
            #iframe {
                display:none;
            }
        }
    }
</style>
