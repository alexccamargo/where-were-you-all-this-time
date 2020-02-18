<template>
  <div>
    {{bla}}
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloDebora extends Vue {
  @Prop() private getWhateverIhaveHere!: String;

  private bla = '';

  created() {
    this.changeSomething();
  }

  changeSomething() {
    this.bla = `${this.getWhateverIhaveHere} Hey Are you messing up with me?`;
  }
}

</script>
