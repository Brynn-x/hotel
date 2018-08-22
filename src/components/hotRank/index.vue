<template>
  <div class="container_hot">
    <div class="rank">
      <div class="hot-hotel">
        <div class="title">
          <span class="item" :class="{light: index === currentIndex}" @click="change(index)" v-for="(item, index) in title" :key="index">
            {{item}}
            <i>|</i>
          </span>
        </div>
        <div class="line"></div>
        <template  v-for="(item, index) in list[currentIndex][currentPage-1]">
          <my-list :item="item" :key="index"></my-list>
        </template>
        <el-pagination class="page"
          :page-size="5"
          :current-page="currentPage"
          @current-change="currentChange"
          layout="prev, pager, next"
          :total="20">
        </el-pagination>
      </div>
      <div class="search">
        <div class="theme">至尊优享</div>
        <div class="line"></div>
        <my-card></my-card>
        <my-card></my-card>
      </div>
    </div>
  </div>
</template>

<script>
  import myList from '@/components/list/index.vue';
  import myCard from '@/components/card/index.vue';
    export default {
      name: "index",
      data () {
          return {
            title: ["人气最高","入住率最高","星级最高"],
            list: [
              //list第一项
              [
                [
                  {url:"./static/img/l1.jpg",name:"古巷十号艺术酒店",address:"位置：后海、南锣鼓巷地区 天安门、王府井地区",score:"4.5分",value5:4.5,people:"来自1963人点评",assess:"“很好，环境不错，下次再来”",price:"890"},
                  {url:"./static/img/l2.jpg",name:"桔子酒店·精选(北京亚运村店) ",address:"位置：亚运村、奥体中心地区 马甸、安贞地区",score:"4.9分",value5:4.9,people:"来自8815人点评",assess:"“干净卫生 房间不错”",price:"541"},
                  {url:"./static/img/l3.jpg",name:"阳光旅店 ",address:"位置：劲松、潘家园地区",score:"4.8分",value5:4.8,people:"来自321人点评",assess:"暂无评论",price:"308" },
                  {url:"./static/img/l4.jpg",name:"北京昆仑饭店 ",address:"位置：燕莎、三里屯商业区 朝阳区",score:"4.7分",value5:4.7,people:"来自6395人点评",assess:"”第一次来，服务很周到，门口就是地铁，很方便“",price:"1318" },
                  {url:"./static/img/l6.jpg",name:"香格里拉饭店",address:"位置：西直门及北京展览馆地区 海淀区",score:"4.6分",value5:4.6,people:" 来自5010人点评",assess:"“花园是酒店，高大上”",price:"1464" },
                  {url:"./static/img/l7.jpg",name:" 舟客家度假逸墅",address:"位置：密云风景区 密云区",score:"4分",value5:4,people:"来自224人点评",assess:"暂无点评",price:"743" },
                  {url:"./static/img/l8.jpg",name:"金融街亚朵S吴酒店 ",address:"位置：西单、金融街地区 西城区",score:"4.8分",value5:4.8,people:"来自4890人点评",assess:"“早餐品种少，但还比较精致”",price:"1287" }
                ],
                [
                  {url:"./static/img/l3.jpg",name:"阳光旅店 ",address:"位置：劲松、潘家园地区",score:"4.8分",value5:4.8,people:"来自321人点评",assess:"暂无评论",price:"308" },
                  {url:"./static/img/l3.jpg",name:"阳光旅店 ",address:"位置：劲松、潘家园地区",score:"4.8分",value5:4.8,people:"来自321人点评",assess:"暂无评论",price:"308" },
                  {url:"./static/img/l3.jpg",name:"阳光旅店 ",address:"位置：劲松、潘家园地区",score:"4.8分",value5:4.8,people:"来自321人点评",assess:"暂无评论",price:"308" },
                  {url:"./static/img/l3.jpg",name:"阳光旅店 ",address:"位置：劲松、潘家园地区",score:"4.8分",value5:4.8,people:"来自321人点评",assess:"暂无评论",price:"308" },
                  {url:"./static/img/l3.jpg",name:"阳光旅店 ",address:"位置：劲松、潘家园地区",score:"4.8分",value5:4.8,people:"来自321人点评",assess:"暂无评论",price:"308" },
                  {url:"./static/img/l3.jpg",name:"阳光旅店 ",address:"位置：劲松、潘家园地区",score:"4.8分",value5:4.8,people:"来自321人点评",assess:"暂无评论",price:"308" },
                  {url:"./static/img/l3.jpg",name:"阳光旅店 ",address:"位置：劲松、潘家园地区",score:"4.8分",value5:4.8,people:"来自321人点评",assess:"暂无评论",price:"308" },
                ],
                [
                  {url:"./static/img/l7.jpg",name:" 舟客家度假逸墅",address:"位置：密云风景区 密云区",score:"4分",value5:4,people:"来自224人点评",assess:"暂无点评",price:"743" },
                  {url:"./static/img/l7.jpg",name:" 舟客家度假逸墅",address:"位置：密云风景区 密云区",score:"4分",value5:4,people:"来自224人点评",assess:"暂无点评",price:"743" },
                  {url:"./static/img/l7.jpg",name:" 舟客家度假逸墅",address:"位置：密云风景区 密云区",score:"4分",value5:4,people:"来自224人点评",assess:"暂无点评",price:"743" },
                  {url:"./static/img/l7.jpg",name:" 舟客家度假逸墅",address:"位置：密云风景区 密云区",score:"4分",value5:4,people:"来自224人点评",assess:"暂无点评",price:"743" },
                  {url:"./static/img/l7.jpg",name:" 舟客家度假逸墅",address:"位置：密云风景区 密云区",score:"4分",value5:4,people:"来自224人点评",assess:"暂无点评",price:"743" },
                  {url:"./static/img/l7.jpg",name:" 舟客家度假逸墅",address:"位置：密云风景区 密云区",score:"4分",value5:4,people:"来自224人点评",assess:"暂无点评",price:"743" },
                  {url:"./static/img/l7.jpg",name:" 舟客家度假逸墅",address:"位置：密云风景区 密云区",score:"4分",value5:4,people:"来自224人点评",assess:"暂无点评",price:"743" },
                ],
                [
                  {url:"./static/img/l2.jpg",name:"桔子酒店·精选(北京亚运村店) ",address:"位置：亚运村、奥体中心地区 马甸、安贞地区",score:"4.9分",value5:4.9,people:"来自8815人点评",assess:"“干净卫生 房间不错”",price:"541"},
                    {url:"./static/img/l2.jpg",name:"桔子酒店·精选(北京亚运村店) ",address:"位置：亚运村、奥体中心地区 马甸、安贞地区",score:"4.9分",value5:4.9,people:"来自8815人点评",assess:"“干净卫生 房间不错”",price:"541"},
                    {url:"./static/img/l2.jpg",name:"桔子酒店·精选(北京亚运村店) ",address:"位置：亚运村、奥体中心地区 马甸、安贞地区",score:"4.9分",value5:4.9,people:"来自8815人点评",assess:"“干净卫生 房间不错”",price:"541"},
                    {url:"./static/img/l2.jpg",name:"桔子酒店·精选(北京亚运村店) ",address:"位置：亚运村、奥体中心地区 马甸、安贞地区",score:"4.9分",value5:4.9,people:"来自8815人点评",assess:"“干净卫生 房间不错”",price:"541"},
                    {url:"./static/img/l2.jpg",name:"桔子酒店·精选(北京亚运村店) ",address:"位置：亚运村、奥体中心地区 马甸、安贞地区",score:"4.9分",value5:4.9,people:"来自8815人点评",assess:"“干净卫生 房间不错”",price:"541"},
                    {url:"./static/img/l2.jpg",name:"桔子酒店·精选(北京亚运村店) ",address:"位置：亚运村、奥体中心地区 马甸、安贞地区",score:"4.9分",value5:4.9,people:"来自8815人点评",assess:"“干净卫生 房间不错”",price:"541"},
                    {url:"./static/img/l2.jpg",name:"桔子酒店·精选(北京亚运村店) ",address:"位置：亚运村、奥体中心地区 马甸、安贞地区",score:"4.9分",value5:4.9,people:"来自8815人点评",assess:"“干净卫生 房间不错”",price:"541"},
                  ]
              ],
              //list第二项
               [
                [
                  {url:"./static/img/l4.jpg",name:"北京昆仑饭店 ",address:"位置：燕莎、三里屯商业区 朝阳区",score:"4.7分",value5:4.7,people:"来自6395人点评",assess:"”第一次来，服务很周到，门口就是地铁，很方便“",price:"1318" },
                  {url:"./static/img/l4.jpg",name:"北京昆仑饭店 ",address:"位置：燕莎、三里屯商业区 朝阳区",score:"4.7分",value5:4.7,people:"来自6395人点评",assess:"”第一次来，服务很周到，门口就是地铁，很方便“",price:"1318" },
                  {url:"./static/img/l4.jpg",name:"北京昆仑饭店 ",address:"位置：燕莎、三里屯商业区 朝阳区",score:"4.7分",value5:4.7,people:"来自6395人点评",assess:"”第一次来，服务很周到，门口就是地铁，很方便“",price:"1318" },
                  {url:"./static/img/l4.jpg",name:"北京昆仑饭店 ",address:"位置：燕莎、三里屯商业区 朝阳区",score:"4.7分",value5:4.7,people:"来自6395人点评",assess:"”第一次来，服务很周到，门口就是地铁，很方便“",price:"1318" },
                  {url:"./static/img/l4.jpg",name:"北京昆仑饭店 ",address:"位置：燕莎、三里屯商业区 朝阳区",score:"4.7分",value5:4.7,people:"来自6395人点评",assess:"”第一次来，服务很周到，门口就是地铁，很方便“",price:"1318" },
                  {url:"./static/img/l4.jpg",name:"北京昆仑饭店 ",address:"位置：燕莎、三里屯商业区 朝阳区",score:"4.7分",value5:4.7,people:"来自6395人点评",assess:"”第一次来，服务很周到，门口就是地铁，很方便“",price:"1318" },
                  {url:"./static/img/l4.jpg",name:"北京昆仑饭店 ",address:"位置：燕莎、三里屯商业区 朝阳区",score:"4.7分",value5:4.7,people:"来自6395人点评",assess:"”第一次来，服务很周到，门口就是地铁，很方便“",price:"1318" }
                ],
                [
                  {url:"./static/img/l3.jpg",name:"阳光旅店 ",address:"位置：劲松、潘家园地区",score:"4.8分",value5:4.8,people:"来自321人点评",assess:"暂无评论",price:"308" },
                  {url:"./static/img/l3.jpg",name:"阳光旅店 ",address:"位置：劲松、潘家园地区",score:"4.8分",value5:4.8,people:"来自321人点评",assess:"暂无评论",price:"308" },
                  {url:"./static/img/l3.jpg",name:"阳光旅店 ",address:"位置：劲松、潘家园地区",score:"4.8分",value5:4.8,people:"来自321人点评",assess:"暂无评论",price:"308" },
                  {url:"./static/img/l3.jpg",name:"阳光旅店 ",address:"位置：劲松、潘家园地区",score:"4.8分",value5:4.8,people:"来自321人点评",assess:"暂无评论",price:"308" },
                  {url:"./static/img/l3.jpg",name:"阳光旅店 ",address:"位置：劲松、潘家园地区",score:"4.8分",value5:4.8,people:"来自321人点评",assess:"暂无评论",price:"308" },
                  {url:"./static/img/l3.jpg",name:"阳光旅店 ",address:"位置：劲松、潘家园地区",score:"4.8分",value5:4.8,people:"来自321人点评",assess:"暂无评论",price:"308" },
                  {url:"./static/img/l3.jpg",name:"阳光旅店 ",address:"位置：劲松、潘家园地区",score:"4.8分",value5:4.8,people:"来自321人点评",assess:"暂无评论",price:"308" },
                ],
                [
                  {url:"./static/img/l7.jpg",name:" 舟客家度假逸墅",address:"位置：密云风景区 密云区",score:"4分",value5:4,people:"来自224人点评",assess:"暂无点评",price:"743" },
                  {url:"./static/img/l7.jpg",name:" 舟客家度假逸墅",address:"位置：密云风景区 密云区",score:"4分",value5:4,people:"来自224人点评",assess:"暂无点评",price:"743" },
                  {url:"./static/img/l7.jpg",name:" 舟客家度假逸墅",address:"位置：密云风景区 密云区",score:"4分",value5:4,people:"来自224人点评",assess:"暂无点评",price:"743" },
                  {url:"./static/img/l7.jpg",name:" 舟客家度假逸墅",address:"位置：密云风景区 密云区",score:"4分",value5:4,people:"来自224人点评",assess:"暂无点评",price:"743" },   {url:"./static/img/l7.jpg",name:" 舟客家度假逸墅",address:"位置：密云风景区 密云区",score:"4分",value5:4,people:"来自224人点评",assess:"暂无点评",price:"743" },
                  {url:"./static/img/l7.jpg",name:" 舟客家度假逸墅",address:"位置：密云风景区 密云区",score:"4分",value5:4,people:"来自224人点评",assess:"暂无点评",price:"743" },
                  {url:"./static/img/l7.jpg",name:" 舟客家度假逸墅",address:"位置：密云风景区 密云区",score:"4分",value5:4,people:"来自224人点评",assess:"暂无点评",price:"743" },
                ],
                [
                   {url:"./static/img/l2.jpg",name:"桔子酒店·精选(北京亚运村店) ",address:"位置：亚运村、奥体中心地区 马甸、安贞地区",score:"4.9分",value5:4.9,people:"来自8815人点评",assess:"“干净卫生 房间不错”",price:"541"},
                   {url:"./static/img/l2.jpg",name:"桔子酒店·精选(北京亚运村店) ",address:"位置：亚运村、奥体中心地区 马甸、安贞地区",score:"4.9分",value5:4.9,people:"来自8815人点评",assess:"“干净卫生 房间不错”",price:"541"},
                   {url:"./static/img/l2.jpg",name:"桔子酒店·精选(北京亚运村店) ",address:"位置：亚运村、奥体中心地区 马甸、安贞地区",score:"4.9分",value5:4.9,people:"来自8815人点评",assess:"“干净卫生 房间不错”",price:"541"},
                   {url:"./static/img/l2.jpg",name:"桔子酒店·精选(北京亚运村店) ",address:"位置：亚运村、奥体中心地区 马甸、安贞地区",score:"4.9分",value5:4.9,people:"来自8815人点评",assess:"“干净卫生 房间不错”",price:"541"},
                   {url:"./static/img/l2.jpg",name:"桔子酒店·精选(北京亚运村店) ",address:"位置：亚运村、奥体中心地区 马甸、安贞地区",score:"4.9分",value5:4.9,people:"来自8815人点评",assess:"“干净卫生 房间不错”",price:"541"},
                   {url:"./static/img/l2.jpg",name:"桔子酒店·精选(北京亚运村店) ",address:"位置：亚运村、奥体中心地区 马甸、安贞地区",score:"4.9分",value5:4.9,people:"来自8815人点评",assess:"“干净卫生 房间不错”",price:"541"},
                   {url:"./static/img/l2.jpg",name:"桔子酒店·精选(北京亚运村店) ",address:"位置：亚运村、奥体中心地区 马甸、安贞地区",score:"4.9分",value5:4.9,people:"来自8815人点评",assess:"“干净卫生 房间不错”",price:"541"},
                 ],
              ],
              //list第三项
              [
                [
                  {url:"./static/img/l6.jpg",name:"北京香格里拉饭店",address:"位置：西直门及北京展览馆地区 海淀区",score:"4.6分",value5:4.6,people:" 来自5010人点评",assess:"“花园是酒店，高大上”",price:"1464" },
                  {url:"./static/img/l6.jpg",name:"北京香格里拉饭店",address:"位置：西直门及北京展览馆地区 海淀区",score:"4.6分",value5:4.6,people:" 来自5010人点评",assess:"“花园是酒店，高大上”",price:"1464" },
                  {url:"./static/img/l6.jpg",name:"北京香格里拉饭店",address:"位置：西直门及北京展览馆地区 海淀区",score:"4.6分",value5:4.6,people:" 来自5010人点评",assess:"“花园是酒店，高大上”",price:"1464" },
                  {url:"./static/img/l6.jpg",name:"北京香格里拉饭店",address:"位置：西直门及北京展览馆地区 海淀区",score:"4.6分",value5:4.6,people:" 来自5010人点评",assess:"“花园是酒店，高大上”",price:"1464" },
                  {url:"./static/img/l6.jpg",name:"北京香格里拉饭店",address:"位置：西直门及北京展览馆地区 海淀区",score:"4.6分",value5:4.6,people:" 来自5010人点评",assess:"“花园是酒店，高大上”",price:"1464" },
                  {url:"./static/img/l6.jpg",name:"北京香格里拉饭店",address:"位置：西直门及北京展览馆地区 海淀区",score:"4.6分",value5:4.6,people:" 来自5010人点评",assess:"“花园是酒店，高大上”",price:"1464" },
                  {url:"./static/img/l6.jpg",name:"北京香格里拉饭店",address:"位置：西直门及北京展览馆地区 海淀区",score:"4.6分",value5:4.6,people:" 来自5010人点评",assess:"“花园是酒店，高大上”",price:"1464" }
                ],
                [
                  {url:"./static/img/l2.jpg",name:"桔子酒店·精选(北京亚运村店) ",address:"位置：亚运村、奥体中心地区 马甸、安贞地区",score:"4.9分",value5:4.9,people:"来自8815人点评",assess:"“干净卫生 房间不错”",price:"541"},
                  {url:"./static/img/l2.jpg",name:"桔子酒店·精选(北京亚运村店) ",address:"位置：亚运村、奥体中心地区 马甸、安贞地区",score:"4.9分",value5:4.9,people:"来自8815人点评",assess:"“干净卫生 房间不错”",price:"541"},
                  {url:"./static/img/l2.jpg",name:"桔子酒店·精选(北京亚运村店) ",address:"位置：亚运村、奥体中心地区 马甸、安贞地区",score:"4.9分",value5:4.9,people:"来自8815人点评",assess:"“干净卫生 房间不错”",price:"541"},
                  {url:"./static/img/l2.jpg",name:"桔子酒店·精选(北京亚运村店) ",address:"位置：亚运村、奥体中心地区 马甸、安贞地区",score:"4.9分",value5:4.9,people:"来自8815人点评",assess:"“干净卫生 房间不错”",price:"541"},
                  {url:"./static/img/l2.jpg",name:"桔子酒店·精选(北京亚运村店) ",address:"位置：亚运村、奥体中心地区 马甸、安贞地区",score:"4.9分",value5:4.9,people:"来自8815人点评",assess:"“干净卫生 房间不错”",price:"541"},
                  {url:"./static/img/l2.jpg",name:"桔子酒店·精选(北京亚运村店) ",address:"位置：亚运村、奥体中心地区 马甸、安贞地区",score:"4.9分",value5:4.9,people:"来自8815人点评",assess:"“干净卫生 房间不错”",price:"541"},
                  {url:"./static/img/l2.jpg",name:"桔子酒店·精选(北京亚运村店) ",address:"位置：亚运村、奥体中心地区 马甸、安贞地区",score:"4.9分",value5:4.9,people:"来自8815人点评",assess:"“干净卫生 房间不错”",price:"541"},
                ],
                [
                  {url:"./static/img/l7.jpg",name:" 舟客家度假逸墅",address:"位置：密云风景区 密云区",score:"4分",value5:4,people:"来自224人点评",assess:"暂无点评",price:"743" },
                  {url:"./static/img/l7.jpg",name:" 舟客家度假逸墅",address:"位置：密云风景区 密云区",score:"4分",value5:4,people:"来自224人点评",assess:"暂无点评",price:"743" },
                  {url:"./static/img/l7.jpg",name:" 舟客家度假逸墅",address:"位置：密云风景区 密云区",score:"4分",value5:4,people:"来自224人点评",assess:"暂无点评",price:"743" },
                  {url:"./static/img/l7.jpg",name:" 舟客家度假逸墅",address:"位置：密云风景区 密云区",score:"4分",value5:4,people:"来自224人点评",assess:"暂无点评",price:"743" },   {url:"./static/img/l7.jpg",name:" 舟客家度假逸墅",address:"位置：密云风景区 密云区",score:"4分",value5:4,people:"来自224人点评",assess:"暂无点评",price:"743" },
                  {url:"./static/img/l7.jpg",name:" 舟客家度假逸墅",address:"位置：密云风景区 密云区",score:"4分",value5:4,people:"来自224人点评",assess:"暂无点评",price:"743" },
                  {url:"./static/img/l7.jpg",name:" 舟客家度假逸墅",address:"位置：密云风景区 密云区",score:"4分",value5:4,people:"来自224人点评",assess:"暂无点评",price:"743" },
                ],
                [
                  {url:"./static/img/l3.jpg",name:"阳光旅店 ",address:"位置：劲松、潘家园地区",score:"4.8分",value5:4.8,people:"来自321人点评",assess:"暂无评论",price:"308" },
                  {url:"./static/img/l3.jpg",name:"阳光旅店 ",address:"位置：劲松、潘家园地区",score:"4.8分",value5:4.8,people:"来自321人点评",assess:"暂无评论",price:"308" },
                  {url:"./static/img/l3.jpg",name:"阳光旅店 ",address:"位置：劲松、潘家园地区",score:"4.8分",value5:4.8,people:"来自321人点评",assess:"暂无评论",price:"308" },
                  {url:"./static/img/l3.jpg",name:"阳光旅店 ",address:"位置：劲松、潘家园地区",score:"4.8分",value5:4.8,people:"来自321人点评",assess:"暂无评论",price:"308" },
                  {url:"./static/img/l3.jpg",name:"阳光旅店 ",address:"位置：劲松、潘家园地区",score:"4.8分",value5:4.8,people:"来自321人点评",assess:"暂无评论",price:"308" },
                  {url:"./static/img/l3.jpg",name:"阳光旅店 ",address:"位置：劲松、潘家园地区",score:"4.8分",value5:4.8,people:"来自321人点评",assess:"暂无评论",price:"308" },
                  {url:"./static/img/l3.jpg",name:"阳光旅店 ",address:"位置：劲松、潘家园地区",score:"4.8分",value5:4.8,people:"来自321人点评",assess:"暂无评论",price:"308" },
                ]
              ]
            ],
            currentIndex: 0,
            currentPage: 1,
          }
      },
      methods: {
        change: function (index) {
          this.currentIndex = index;
        },
        currentChange: function (index) {
            this.currentPage = index;
        }

      },
      components: {
        myList,
        myCard
      }
    }
</script>

<style lang="stylus">
.container_hot
  width 100%
  font-size 0
  .rank
    margin 0 auto
    max-width 1080px
    padding 20px 0
    height 1300px
    .hot-hotel
      display inline-block
      vertical-align top
      width 70%
      .title
        margin-bottom 5px
        color black
        .item
          margin-right 10px
          font-size 16px
          color #2676e3
        .light
          color #ed721e
        .item:hover
          color #ffb000
        .city
          margin-left 30px
        span
          margin-right 30px
          font-size 12px
      .line
        margin-bottom 10px
        height 3px
        background #66b1ff
      .page
        text-align center
    .search
      display inline-block
      width 28%
      margin-left 2%
      .theme
        margin-bottom 5px
        font-size 16px
        color #c75507
      .line
        height 3px
        background #e6a23c
      .box-card
        margin-top 20px
        .el-card__header
          padding 4px 20px
          .head
            width 100%
            vertical-align 50%
            font-size 16px
            .logo
              vertical-align middle
              width 20%
            .title
              display inline-block
              text-align center
              width 56%
            .btn
              width 20%
</style>
