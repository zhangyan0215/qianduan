<script>
    import Vue from 'vue';
    import axios from 'axios';
    export default{
        data(){
            return{
                list:[],
            }
        },
        mounted:function(){
            this.findAll();
        },
        methods: {
            findAll(){
                var self = this;
                axios.get("http://localhost/products/front")
                .then(response =>{
                    self.list=response.data
                })
                .catch(()=>{
                    console.log('查询错误')
                })
            }
        },
        filters: {
         formatDate(val) {
                    var value=new Date(val);
                    var year=value.getFullYear();
                    var month=value.getMonth()+1;
                    var day=value.getDate();
                    var hour=value.getHours();
                    var min=value.getMinutes();
                    return year+'-'+month+'-'+day+'  '+hour+':'+min;
         }
     }

    }
</script>

<template>

    <div class="container">
        <ul>
        <li class="pai-item" v-for="item in list" :key="item.proid">
    <a class="link-wrap" href="#" target="_blank">
      <div class="header-section ">
        <img class="pic" src="../image/end.jpg">
        <p class="title">
          {{item.pname}}
        </p>
      </div>

      <div class="info-section">
        <p class="">
          <span class="label">
            起拍价
          </span>
          <span class="price"><em class="currency">¥ </em><em>{{item.startPrice}}</em></span>
        </p>

        <p class="time time-todo pai-status-todo-show">
          <span class="label">
            开拍时间
          </span>
          <span class="value">{{item.startTime|formatDate}}</span>
        </p>

        <p class="">
          <span class="label">结束时间</span>
          <span class="value">{{item.endTime|formatDate}}</span>
        </p>
      </div>

      <div class="footer-section">
        <span class="num-auction"><em class="pai-xmpp-viewer-count">{{item.looktimes}}</em>次围观</span>
        <span class="num-apply"><em>{{item.cols==null?0:item.cols}}</em>人报名</span>
      </div>
    </a>
  </li>
  </ul>
    </div>
</template>


<style scope="scope">
    .pai-item{
        float: left;
        margin: 0 70px 20px 0;
    }
    .pic{
      width: 200px;
      height: 160px;
    }
    .price{
      color: red;
      font-size: 30px;
    }
    .label{
      color: blue;
    }
    .info-section{
      border: solid #999 1px;
    }
    .footer-section{
      border: solid #999 1px;
      color: #999;
    }
    li{
      list-style-type: none;
    }
</style>