import {AppView} from './AppView';
import * as $ from 'jquery';

$(() => {

	// Finally, we kick things off by creating the **App**.

var app = 	new AppView({el:$(".app")});
app.render();
});
