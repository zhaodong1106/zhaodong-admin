import index from '@/store/index';



function checkPermission(el,binding) {
  const {value}=binding;
  const roles=index.state.userInfo['roles'];
  console.log(value);
  console.log(roles);
  if(value&&value instanceof  Array){
    if(value.length>0){
      const permissionRoles=value;
      const hasPermission=roles.some(role=>{
        return permissionRoles.includes(role);
      })
      if(!hasPermission){
        el.parentNode&&el.parentNode.removeChild(el);
      }
    }
  }else {
    throw new Error(`need roles! Like v-permission="['admin','editor']"`)
  }
}

const permission= {
  inserted(el, binding) {
    checkPermission(el, binding)
  },
  update(el, binding) {
    checkPermission(el, binding)
  }
}
export default permission;
