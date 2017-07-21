$(window).ready(function () {

	var i, j, rating = 0, num_rev, date, pos = 0;

	$.ajax({
		url: "https://graph.facebook.com/1817188948594955/ratings?&access_token=EAAEqZBuCMZBWYBADUv2FBsZCZBDbm9E5J5ZBmFCVLZCEqnZAswYVYocknPGWTzWiRJatXGQUmGYTu9ZAVc5NwpfquuVzKCCbagTRLCAuKY1OHRIo0CXg7K24G3UyqNYkelxZAfS2TO9OEa3gD9pJpc3T5rzLgbG6ovcadbmJn9y0NwvJzPGP1XGghSaxs9otSkDIZD",
		dataType: "json",
		error: function () {
			$("#reviews_box").hide();
		},
		success: function (obj) {


			num_rev = obj.data.length;

			console.log(num_rev);
			
			

			

			// } 
			// else {
			// 	for(i=0;i<3;i++){
			// 		$("#reviews_box .item:nth-child("+(i+1)+") .avatar").attr("src","https://graph.facebook.com/"+obj.data[i].reviewer.id+"/picture");
			// 		$("#reviews_box .item:nth-child("+(i+1)+") .rev .name").html(obj.data[i].reviewer.name);
			// 		$("#reviews_box .item:nth-child("+(i+1)+") a").attr("href", "https://www.facebook.com/"+obj.data[i].reviewer.id)
			// 			rating=obj.data[i].rating;
			// 		for(j=0; j<rating; j++){
			// 			$("#reviews_box .item:nth-child("+(i+1)+") .rev .vote").append('<i class="fa fa-star"></i>');
			// 		}
			// 		$("#reviews_box .item:nth-child("+(i+1)+") .rev .write").html(obj.data[i].review_text);
			// 	}
			// }
		}
	});

});

function fillItem() {
	for (i = 0; i < num_rev; i++) {
		if (obj.data[i].review_text != "" && obj.data[i].review_text != null && obj.data[i].rating > 3) {
			itemlist();
			$("#reviews_box .item:nth-child(" + (i + 1 - pos) + ") .avatar").attr("src", "https://graph.facebook.com/" + obj.data[i].reviewer.id + "/picture");
			$("#reviews_box .item:nth-child(" + (i + 1 - pos) + ") .rev .name").html(obj.data[i].reviewer.name);
			$("#reviews_box .item:nth-child(" + (i + 1 - pos) + ") a").attr("href", "https://www.facebook.com/" + obj.data[i].reviewer.id)
			rating = obj.data[i].rating;
			for (j = 0; j < rating; j++) {
				$("#reviews_box .item:nth-child(" + (i + 1 - pos) + ") .rev .vote").append('<i class="fa fa-star"></i>');
			}
			$("#reviews_box .item:nth-child(" + (i + 1 - pos) + ") .rev .write").html(obj.data[i].review_text);
		} else {
			pos = pos + 1;
		}
	}
}

function itemlist() {
	a = '';
	a += '<div class="item col-md-8 col-md-offset-2">';
	a += '<ul class="star-rating"></ul>';
	a += '<div class="line-dec"></div>';
	a += '<p class="write"></p>';
	a += '<div class="author-rate rev">';
	a += '<a target="_blank" href="#" title="user">';
	a += '<img class="avatar" src="images/avatar.png" title="" alt="" />';
	a += '<h4 class="name"></h4>';
	a += '</a>';
	a += '<div class="line-dec2"></div>';
	a += '</div>';
	a += '</div>';
	console.log(a);
	$("#itemlist").append(a);
}





























// // rating and number of reviews ==========================================/
// num_rev = obj.data.length;
// for (i = 0; i < num_rev; i++) {
// 	rating += obj.data[i].rating;
// }
// rating = Math.round((rating / num_rev) * 10) / 10;
// if (rating % 1 == 0) {
// 	$("#reviews_box .link_to_reviews .rating .avg").html(rating.toString() + ",0");
// } else {
// 	$("#reviews_box .link_to_reviews .rating .avg").html(rating.toString().replace(".", ","));
// }
// $("#reviews_box .link_to_reviews .rating .num_rev").html(num_rev);

// // reviews and info about them ===========================================/
// for (i = 0; i < 3; i++) {
// 	$("#reviews_box .rev_box:nth-child(" + (i + 2) + ") .avatar").attr("src", "https://graph.facebook.com/" + obj.data[i].reviewer.id + "/picture");
// 	$("#reviews_box .rev_box:nth-child(" + (i + 2) + ") .rev .name").html(obj.data[i].reviewer.name);
// 	$("#reviews_box .rev_box:nth-child(" + (i + 2) + ") a").attr("href", "https://www.facebook.com/" + obj.data[i].reviewer.id)
// 	$("#reviews_box .rev_box:nth-child(" + (i + 2) + ") .rev .vote span").html(obj.data[i].rating);
// 	$("#reviews_box .rev_box:nth-child(" + (i + 2) + ") .rev .write").html(obj.data[i].review_text);
// 	$("#reviews_box .rev_box:nth-child(" + (i + 2) + ") .time").html(obj.data[i].created_time);
// 	var myDate = new Date(Date.parse(obj.data[i].created_time));
// 	myDate = myDate.toLocaleString();
// 	$("#reviews_box .rev_box:nth-child(" + (i + 2) + ") .time").html(myDate.substring(0, myDate.length - 3));
// }

// 		}
// 	});

// });