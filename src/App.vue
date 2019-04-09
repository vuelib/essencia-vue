<template>
  <div id="app">
    <!-- <ess-card shadow>
      <ess-card-header title="Card" description="Description for to card...." />
    </ess-card>
    
    <ess-card dark shadow style="margin-left: 20px;">
      <ess-card-header title="Card" description="Description for to card...." dark />
    </ess-card>

    <ess-card shadow style="margin-left: 20px;">
      <ess-card-header title="Card" description="Description for to card...." color="blue" />
    </ess-card>-->

    <!-- <ess-card shadow>
      <ess-card-header>
        <h4 class="ess font-bold font-size-18px font-color-dark-100per" style="margin: 0">
          Card
        </h4>
        <p class="ess font-regular font-size-16px font-color-dark-40per" style="margin: 0; margin-top: 10px">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum blanditiis vitae quibusdam.
        </p>
      </ess-card-header>
      <div class="ess container">
        Container
      </div>
    </ess-card>
    <br />
    <br />
    
    <ess-card dark shadow>
      <ess-card-header>
        <h4 class="ess font-bold font-size-18px font-color-light-100per" style="margin: 0">
          Card
        </h4>
        <p class="ess font-regular font-size-16px font-color-light-40per" style="margin: 0; margin-top: 10px">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum blanditiis vitae quibusdam.
        </p>
      </ess-card-header>
      <div class="ess container">
        Container
      </div>
    </ess-card>
    <br />
    <br />
    
    <ess-card color="blue" shadow>
      <ess-card-header>
        <h4 class="ess font-bold font-size-18px" style="margin: 0">
          Card
        </h4>
        <p class="ess font-regular font-size-16px font-color-light-60per" style="margin: 0; margin-top: 10px">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum blanditiis vitae quibusdam.
        </p>
      </ess-card-header>
      <div class="ess container">
        Container
      </div>
    </ess-card>
    <br />
    <br />-->

    <ess-card shadow>
      <ess-card-header color="turquoise">
        <h4 class="ess font-bold font-size-18px" style="margin: 0">Card</h4>
        <p
          class="ess font-regular font-size-16px font-color-light-80per"
          style="margin: 0;"
        >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum blanditiis vitae quibusdam.</p>
      </ess-card-header>
      <ess-card-content>
        <ess-select v-model="option" :options="[
          {label: 'Option 11', value: 'opt1'},
          {label: 'Option 22', value: 'opt2'},
          {label: 'Option 33', value: 'opt3'},
        ]"> Select </ess-select>


      </ess-card-content>
      <ess-card-footer>
        <ess-button color="pink">Lorem ipsum dolor sit amet.</ess-button>
      </ess-card-footer>
    </ess-card>
  </div>
</template>

<script>
import EssMenu from "@/components/EssMenu";
import EssCard from "@/components/EssCard";
import EssCardHeader from "@/components/EssCardHeader";
import EssCardContent from "@/components/EssCardContent";
import EssCardFooter from "@/components/EssCardFooter";
import EssSelect from "@/components/EssSelect";
import EssList from "@/components/EssList";
import EssBadge from "@/components/EssBadge";
import EssRadio from "@/components/EssRadio";
import EssInput from "@/components/EssInput";
import EssButton from "@/components/EssButton";
import EssAvatar from "@/components/EssAvatar";
import EssSwitch from "@/components/EssSwitch";
import EssCheckbox from "@/components/EssCheckbox";
import EssFloatButton from "@/components/EssFloatButton";
import EssListItem from "@/components/EssListItem";
import EssListTile from "@/components/EssListTile";

export default {
  name: "App",
  components: {
    EssMenu,
    EssCard,
    EssCardHeader,
    EssCardContent,
    EssCardFooter,
    EssSelect,
    EssList,
    EssBadge,
    EssRadio,
    EssInput,
    EssAvatar,
    EssButton,
    EssSwitch,
    EssCheckbox,
    EssFloatButton,
    EssListItem,
    EssListTile
  },
  data() {
    return {
      dark: false,
      lang: "pt-BR",
      shadow: false,
      illuminate: false,
      name: "Essencia UI",
      option: 'opt3'
    };
  },
  watch: {
    shadow() {
      if (this.shadow) {
        this.illuminate = false;
      }
    },
    illuminate() {
      if (this.illuminate) {
        this.shadow = false;
      }
    }
  }
};
</script>

<style lang="scss">
*,
*:before,
*:after {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

@import url("https://use.fontawesome.com/releases/v5.8.1/css/all.css");

@import "./assets/scss/main";
</style>

