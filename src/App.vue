<template>
  <div id="app">
    <div class="ess header"></div>
    
    <div class="ess card">
      
      <div style="position: relative; display: flex; width: 100%;">
        <div style="position: relative; padding: 60px 0;">
          <ess-avatar size="lg" shape="circle" :src="require('@/assets/images/ess_circle_logo.svg')" />
        </div>

        <div style="position: relative; padding-left: 40px;">
          <h3 class="ess">Essencia UI</h3>
          <p class="ess" style="max-width: 600px; color: #939393; margin-bottom: 60px;" >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Beatae nam at vero natus dignissimos dolores illum accusamus ipsum. Dicta, quam!
          </p>
          <ess-badge color="blue" size="small"> Technology </ess-badge>
          <ess-badge color="blue" size="small" style="margin-left: 10px;"> Culinary </ess-badge>
          <ess-badge color="blue" size="small" style="margin-left: 10px;"> Games </ess-badge>

        </div>
      </div>
      
      <div style="position: relative; display: flex; width: 100%; margin-top: 40px;">
        <ess-tabs v-model="tab">
          <ess-tab name="user"> User </ess-tab>
          <ess-tab name="profile"> Profile </ess-tab>
        </ess-tabs>
      </div>

      <div class="ess row" style="padding: 40px 0;">
        <div class="ess col lg-12" v-if="tab === 'user'">

          <div class="ess row" >
            <div class="ess col lg-4">
              <ess-input-text type="text" label="Name" placeholder="Ex. Jhon Doe" text-tip="Enter your first and last name." icon-text-tip="fas fa-user" />
            </div>
            <div class="ess col lg-4">
              <ess-input-text type="email" label="Email" placeholder="Ex. jhon_doe@example.com" text-tip="Enter your email address, it will be used to sign in with the application." icon-text-tip="fas fa-envelope" />
            </div>
            <div class="ess col lg-4">
              <ess-input-text mask="##-##-##" type="text" label="Username" placeholder="Ex. jhon_doe" text-tip="Enter a name that will be shown in the application." icon-text-tip="fas fa-envelope" />
            </div>
          </div>
          
          <div class="ess row" >
            <div class="ess col lg-6">
              <ess-input-password label="Password" placeholder="Ex. Jhon Doe" text-tip="Enter your first and last name." icon-text-tip="fas fa-user" :show-strength="true"/>
            </div>
            <div class="ess col lg-6">
              <ess-input-password label="Confirm Password" placeholder="Ex. jhon_doe@example.com" text-tip="Enter your email address, it will be used to sign in with the application." icon-text-tip="fas fa-envelope" />
            </div>
          </div>

        </div>
      </div>
      
      <!-- <div style="position: relative; display: flex; width: 100%;">
        <div v-if="tab === 'profile'" style="">
          <div class="ess row">
            <div class="ess col lg-4">

              <ess-input-text label="Name" />

            </div>
            <div class="ess col lg-4"></div>
            <div class="ess col lg-4"></div>
          </div>  
        </div>
      </div> -->

    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import EssButton from '@/components/ess-buttons/EssButton.vue';
import EssFloatButton from '@/components/ess-buttons/EssFloatButton.vue';
import EssInputText from '@/components/ess-input-text/EssInputText.vue';
import EssInputPassword from '@/components/ess-input-text/EssInputPassword.vue';
import EssProgressBar from '@/components/ess-progress/EssProgressBar.vue';
import EssStepper from '@/components/ess-stepper/EssStepper.vue';
import EssStep from '@/components/ess-stepper/EssStep.vue';
import EssBadge from '@/components/ess-badge/EssBadge.vue';
import EssTooltip from '@/components/ess-tooltip/EssTooltip.vue';
import EssAvatar from '@/components/ess-avatar/EssAvatar.vue';
import EssTabs from '@/components/ess-tabs/EssTabs.vue';
import EssTab from '@/components/ess-tabs/EssTab.vue';

@Component({
  name: 'App',
  components: {
    EssButton,
    EssFloatButton,
    EssInputText,
    EssInputPassword,
    EssProgressBar,
    EssStepper,
    EssStep,
    EssBadge,
    EssTooltip,
    EssAvatar,
    EssTabs,
    EssTab,
  },
})
export default class App extends Vue {
  private tab: string|null = 'user';
  private message: string | null = '';
  private password: string | null = '';
  private progress: number | null = 50;
  private stepper: string | null = 'cog';

  constructor() {
    super();
  }

  public validate(): object {
    return {
      valid: true,
      message: 'Nisi sint amet sint reprehenderit aute ea eu ullamco esse.',
    };
  }

  public validate2(): object {
    return {
      valid: false,
      message: 'Commodo excepteur anim eu cillum ea minim.',
    };
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/main.scss";

.ess.header {
  top: 0px;
  left: 1px;
  width: 100%;
  height: 80px;
  z-index: 9999;
  position: relative;
  background: #ffffff;
  box-shadow: 0px 4px 16px rgba(200, 207, 219, 0.75);
}

.ess.card {
  top: 0px;
  left: 1px;
  width: 80%;
  padding: 40px;
  margin: 0 auto;
  position: relative;
  background: #ffffff;
  box-shadow: 0px 4px 16px rgba(200, 207, 219, 0.75);
}
</style>
