
class Talk {
    constructor(block, arrow, descriptionBlock) {
        block.addEventListener('click', () => {
            //this.defineProperty

            if(this.flag === false) {
                this.flag = true;
                arrow.style.cssText = 'transform: rotate(180deg)';
                descriptionBlock.style.cssText = 'display: block';


            } else {
                this.flag = false;
                arrow.style.cssText = 'transform: rotate(0)';
                descriptionBlock.style.cssText = 'display: none';
            }
            console.log(this.flag);

        });
    }
}

let block1 = document.querySelectorAll('.our-talk__item')[0];
let arrow1 = document.querySelectorAll('.our-talk__item_arrow')[0];
let descriptionBlock1 = document.querySelectorAll('.our-talk__description-text')[0];

let talk1 = new Talk(block1, arrow1, descriptionBlock1);

let block2 = document.querySelectorAll('.our-talk__item')[1];
let arrow2 = document.querySelectorAll('.our-talk__item_arrow')[1];
let descriptionBlock2 = document.querySelectorAll('.our-talk__description-text')[1];

let talk2 = new Talk(block2, arrow2, descriptionBlock2);

let block3 = document.querySelectorAll('.our-talk__item')[2];
let arrow3 = document.querySelectorAll('.our-talk__item_arrow')[2];
let descriptionBlock3 = document.querySelectorAll('.our-talk__description-text')[2];

let talk3 = new Talk(block3, arrow3, descriptionBlock3);

