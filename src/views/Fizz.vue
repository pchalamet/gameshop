<template>
    <div>
        Fizz
    </div>
</template>


<script>

import { SnackbarProgrammatic as Snackbar } from 'buefy'

export default {
   mounted: function() {
        Snackbar.open('Look at me!')    
  }
}
</script>