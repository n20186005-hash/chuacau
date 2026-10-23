(() => {
 const root=document.getElementById('cookie-settings'),input=document.getElementById('analytics'),status=document.getElementById('status');
 if(!root||!input||!status)return;
 const api=window.chuaAnalytics;
 input.checked=api?.get()===true;
 function save(allow){
  const result=api?.set(allow);input.checked=result?.effective===true;
  status.textContent=result?.saved?(allow?root.dataset.saved:root.dataset.rejected):root.dataset.failure;
 }
 document.getElementById('save').addEventListener('click',()=>save(input.checked));
 document.getElementById('reject').addEventListener('click',()=>save(false));
 window.addEventListener('storage',event=>{if(event.key==='analytics-consent'||event.key===null)input.checked=api?.get()===true;});
})();
