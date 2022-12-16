
function  button_in(){
	// let button_time = document.querySelector('button.solid.medium.noselect');
	// button_time.click()
	document.querySelector('button.solid.medium.noselect').click();
};
//document.addEventListener('keydown',
//
//function(event) {
//    if (event.code == 'KeyZ'&& (event.ctrlKey || event.metaKey)){
function  button_out(i=0){
    let slote_list = document.querySelector('.card.modal-card.embedded.has-footer')
    let slote_time = document.querySelector('.timeslots__date-group')
    if (slote_list==null){
        console.log('окно не открыто')
        document.querySelector('button.solid.medium.noselect').click();
        setTimeout (button_out,(1500));
    } else {
        //console.log(slote_list)
    
	let not_slote = document.querySelector('span.empty-placeholder__header-text')
	if (slote_time==null &&
        not_slote!=null &&
        not_slote.textContent == ' Нет свободных таймслотов '
    ){
        //if (i<5){
        //    i++
        //    button_out(i);
        //    console.log(i)
        //}else{
            console.log(i,not_slote.textContent)
            setTimeout (button_out,(1500));
        //}
		
		//document.querySelector('.card.modal-card.embedded.has-footer')
	document.querySelector('button.secondary.noselect').click()
	//i++
	//if (i>5){clearInterval()}
	//}else{
	//	//clearInterval(interval_1)
	}else if (slote_time!=null){
        console.log('Таймслоты!!!')
    }
    }
}
//}}
//)
function reader(){
button_in();

setTimeout (button_out,(1000));
}
let i=0
interval_1=setInterval(reader, 1000)



class TimeSlot {

    async ifer(){};
    async selectorTimeSlote(){}
}