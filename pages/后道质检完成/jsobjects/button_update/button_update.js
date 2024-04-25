export default {
	myVar1: [],
	myVar2: {},
	myFun1: () => {
		{{
  update_production_status.run(
  () => { 
          feisubot_update.run(); 
          showAlert(form_order_detail.sourceData.imno+' '+text_update.text,'success')
        },
  () => showAlert('更新失败!','error'))
}}

	}
}