<template>
  <div class="layout">
    <Layout :style="{minHeight: '100vh'}">
      <Sider collapsible :collapsed-width="78" v-model="isCollapsed">
        <Menu active-name="1-2" theme="dark" width="auto" :class="menuitemClasses">
          <MenuItem name="1-1">
            <Icon type="ios-navigate"></Icon>
            <span>Option 1</span>
          </MenuItem>
          <MenuItem name="1-2">
            <Icon type="search"></Icon>
            <span>Option 2</span>
          </MenuItem>
          <MenuItem name="1-3">
            <Icon type="settings"></Icon>
            <span>Option 3</span>
          </MenuItem>
        </Menu>
      </Sider>
      <Layout>
        <Header :style="{background: '#fff', boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)'}" style="padding: 0px">
          <Row>
            <Col :xs="{span: 4, offset: 1}">
              <Select transfer size="large">
                <Option value="1" key="1">111</Option>
                <Option value="2" key="2">222</Option>
              </Select>
            </Col>
            <Col :xs="{span: 2, offset: 6}">
              <Icon type="md-document" :size="menuIconSize"/>
            </Col>
            <Col :xs="2">
              <Icon type="md-folder" :size="menuIconSize"/>
            </Col>
            <Col :xs="2">
              <Icon type="md-refresh" :size="menuIconSize"/>
            </Col>
            <Col :xs="2">
              <Icon type="md-more" :size="menuIconSize"/>
            </Col>
            <Col :xs="4">
              <Input placeholder="Enter something..." size="large"/>
            </Col>
          </Row>
        </Header>
        <Content :style="{padding: '0 16px 16px'}">
          <Breadcrumb :style="{margin: '16px 0'}">
            <BreadcrumbItem>Home</BreadcrumbItem>
            <BreadcrumbItem>Components</BreadcrumbItem>
            <BreadcrumbItem>Layout</BreadcrumbItem>
          </Breadcrumb>
          <Card>
            <router-view />
          </Card>
        </Content>
      </Layout>
    </Layout>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class Main extends Vue {
  private name = 'Main'
  private isCollapsed = false
  private menuIconSize = 30

  private get menuitemClasses () {
    return [
      'menu-item',
      this.isCollapsed ? 'collapsed-menu' : ''
    ]
  }
}
</script>

<style scoped>
  .menu-item span{
    display: inline-block;
    overflow: hidden;
    width: 69px;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: bottom;
    transition: width .2s ease .2s;
  }
  .menu-item i{
    transform: translateX(0px);
    transition: font-size .2s ease, transform .2s ease;
    vertical-align: middle;
    font-size: 16px;
  }
  .collapsed-menu span{
    width: 0px;
    transition: width .2s ease;
  }
  .collapsed-menu i{
    transform: translateX(5px);
    transition: font-size .2s ease .2s, transform .2s ease .2s;
    vertical-align: middle;
    font-size: 22px;
  }
  .layout-nav{
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
  }
</style>
