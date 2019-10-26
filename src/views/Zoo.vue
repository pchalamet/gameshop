<template>
    <div>
        Zoo    

        <b-notification type="is-success" aria-close-label="Close notification">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit
        </b-notification>        
    </div>
</template>

<script>

import { ToastProgrammatic as Toast } from 'buefy'

export default {
    mounted: function() {
        Toast.open('Toasty!')    
    }
}

</script>
