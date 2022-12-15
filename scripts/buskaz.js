
function  button_in(){
	// let button_time = document.querySelector('button.solid.medium.noselect');
	// button_time.click()
	document.querySelector('button.solid.medium.noselect').click();
};

function  button_out(){
    let slote_list = document.querySelector('.card.modal-card.embedded.has-footer')
    if (slote_list==null){
        console.log('окно не открыто')
        document.querySelector('button.solid.medium.noselect').click();
    } else {
        //console.log(slote_list)
    
	let not_slote = document.querySelector('span.empty-placeholder__header-text')
	if (
        not_slote!=null &&
        not_slote.textContent == ' Нет свободных таймслотов '
    ){
		console.log(not_slote.textContent)
		//document.querySelector('.card.modal-card.embedded.has-footer')
	document.querySelector('button.secondary.noselect').click()
	//i++
	//if (i>5){clearInterval()}
	//}else{
	//	//clearInterval(interval_1)
	}else{
        console.log('Таймслоты!!!')
    }
    }
}

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