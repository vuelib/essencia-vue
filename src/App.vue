<template>
  <div id="app" style="display: flex;">

    <ess-card :dark="dark" shadow style="margin: 20px; padding: 20px 0; width: 450px;">
      <ess-list :dark="dark">

        <ess-list-item separator>
          <ess-list-tile gutter="big" auto>
            <ess-avatar shape="circle" :src="require('@/assets/images/logo.png')" />
          </ess-list-tile>
          
          <ess-list-tile wrap>
            <ess-list-tile>
              <h3 style="margin: 0"> {{ name }} </h3>
            </ess-list-tile>
            <ess-list-tile>
              <span> {{ (lang === 'en') ? 'Visit profile' : 'Visitar Perfil' }} </span>
            </ess-list-tile>
          </ess-list-tile>
          
          <ess-list-tile gutter="small" separator="left" auto>
            <ess-float-button shape="circle" design="clean" >
              <i class="fas fa-cog"></i>
            </ess-float-button>
          </ess-list-tile>
        </ess-list-item>
        
        <ess-list-item separator highlight>
          <ess-list-tile gutter="big" auto limit-height>
            <i class="fas fa-user"></i>
          </ess-list-tile>

          <ess-list-tile wrap>
            <ess-list-tile>
              <h3> {{ (lang === 'en') ? 'Profile' : 'Perfil' }} </h3>
            </ess-list-tile>
            <ess-list-tile auto>
              <ess-input shape="pill" design="outlined" placeholder="Digite seu nome" :dark="dark" :shadow="shadow" :illuminate="illuminate" v-model="name"> Name </ess-input>
            </ess-list-tile>
            <ess-list-tile auto>
              <ess-input placeholder="Digite seu nome" :dark="dark" :shadow="shadow" :illuminate="illuminate" v-model="name" disabled> Name </ess-input>
            </ess-list-tile>
            <ess-list-tile style="margin-top: 20px;">
              <ess-button :shadow="shadow" :illuminate="illuminate"> Salvar Alterações </ess-button>
              <ess-float-button :shadow="shadow" :illuminate="illuminate" style="position: relative; left: 10px;">
                <i class="fas fa-save"></i>
              </ess-float-button>
            </ess-list-tile>
          </ess-list-tile>
        </ess-list-item>
        
        <ess-list-item separator highlight>
          <ess-list-tile gutter="big" auto limit-height>
            <i class="fas fa-comments"></i>
          </ess-list-tile>

          <ess-list-tile wrap>
            <ess-list-tile>
              <h3> {{ (lang === 'en') ? 'Messages' : 'Mensagens' }} </h3>
            </ess-list-tile>
            <ess-list-tile auto>
              <ess-badge :dark="dark" :shadow="shadow" :illuminate="illuminate"> Awesome message <i class="fas fa-heart"></i> </ess-badge>
              <ess-badge color="blue" :dark="dark" :shadow="shadow" :illuminate="illuminate" style="margin-left: 10px;"> V1.0.0 </ess-badge>
            </ess-list-tile>
          </ess-list-tile>
        </ess-list-item>
        
        <ess-list-item separator highlight>
          <ess-list-tile gutter="big" auto limit-height>
            <i class="fas fa-cog"></i>
          </ess-list-tile>

          <ess-list-tile wrap>
            <ess-list-tile>
              <h3> {{ (lang === 'en') ? 'Settings' : 'Configurações' }} </h3>
            </ess-list-tile>
            <ess-list-tile auto>
              <span> Lorem ipsum, dolor sit amet consectetur adipisicing elit. </span>
            </ess-list-tile>
            <ess-list-tile style="margin-top: 20px;">
              <ess-checkbox :dark="dark" :shadow="shadow" :illuminate="illuminate" id="theme" v-model="dark"> Enable Dark Theme </ess-checkbox>
            </ess-list-tile>
            <ess-list-tile style="margin-top: 20px;">
              <ess-checkbox :dark="dark" :shadow="shadow" :illuminate="illuminate" id="shadow" v-model="shadow"> Enable Component Shadow </ess-checkbox>
            </ess-list-tile>
            <ess-list-tile style="margin-top: 20px;">
              <ess-switch :dark="dark" :shadow="shadow" :illuminate="illuminate" id="illumination" v-model="illuminate"> Enable Component Illumination </ess-switch>
            </ess-list-tile>
            <ess-list-tile style="margin-top: 20px;">
              <ess-radio name="lang" value="en" :dark="dark" :shadow="shadow" :illuminate="illuminate" v-model="lang"> Translate English </ess-radio>
              <ess-radio name="lang" value="pt-BR" :dark="dark" :shadow="shadow" :illuminate="illuminate" v-model="lang" style="margin-left: 20px"> Translate Portuguese </ess-radio>
            </ess-list-tile>
          </ess-list-tile>
        </ess-list-item>


      </ess-list>
    </ess-card>

  </div>
</template>

<script>
import EssCard from "@/components/EssCard";
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
  name: 'App',
  components: {
    EssCard,
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
    EssListTile,
  },
  data() {
    return {
      dark: false,
      lang: 'pt-BR',
      shadow: false,
      illuminate: false,
      name: 'Essencia UI',
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
    },
  }
};
</script>

<style>
*, *:before, *:after {
    -webkit-box-sizing: border-box;
       -moz-box-sizing: border-box;
            box-sizing: border-box;
}
</style>

