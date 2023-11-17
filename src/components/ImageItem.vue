<template>
  <div
    class="picture"
    v-lazy-load="placeholder"
  >
    <img
      data-placeholder
      class="picture__image"
      :src="src"
      v-if="placeholder"
    >
  </div>
</template>

<script>
import { defineComponent } from 'vue'
// import { DirectiveElement } from '@/scripts/contracts/interfaces'

export default defineComponent({
  name: 'ImageItem',
  props: ['src','alt',"placeholder"],
  directives: {
    'lazy-load': {
      mounted(el, binding) {

        const image = el.querySelector('.picture__image')
        if (!image) {
          console.error('[v-lazy-load] provided component doesn\'t contain element with class \'image\'')
          return false
        }

        if (typeof binding.value !== 'boolean') {
          console.error('[v-lazy-load] provided value is not a boolean')
          return false
        }

        if (Object.keys(binding.modifiers).length) console.warn('[v-lazy-load] no modifiers allowed')

        function loadImage() {
          if (image) {
            el.eventFn = () => el.classList.add('picture--loaded')
            image.addEventListener('load', el.eventFn)

            el.eventError = () => console.error('[v-lazy-load] error eventlistener')
            image.addEventListener('error', el.eventError)

            image.src = image.dataset.url
          }
        }

        function handleIntersect(
          entries,
          observer,
        ) {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              loadImage()
              observer.unobserve(el)
            }
          })
        }

        function createObserver() {
          const options = { root: null, threshold: 0 }
          const observer = new IntersectionObserver(handleIntersect, options)
          observer.observe(el)
        }

        if (window.IntersectionObserver && binding.value) return createObserver()
        return loadImage()
      },
      unmounted(el) {
        const image = el.querySelector('.picture__image')

        if (image) {
          image.removeEventListener('load', el.eventFn)
          image.removeEventListener('error', el.eventError)
        }
      },
    },
  },
  
})
</script>