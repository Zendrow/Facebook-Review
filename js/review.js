$(window).load(function(){

	var i, rating=0, num_rev, date;

	$.ajax({
		url: "data/data.json",
		dataType:"json",
		error: function(){
			$("#reviews_box").hide();
		},
		success: function(obj){

			// rating and number of reviews ==========================================/
			num_rev=obj.data.length;
			for(i=0;i<num_rev;i++){
				rating +=obj.data[i].rating;
			}
			rating=Math.round((rating/num_rev)*10)/10;
			if(rating%1==0){
				$("#reviews_box .link_to_reviews .rating .avg").html(rating.toString()+",0");
			}else{
				$("#reviews_box .link_to_reviews .rating .avg").html(rating.toString().replace(".", ","));
			}
			$("#reviews_box .link_to_reviews .rating .num_rev").html(num_rev);

			// reviews and info about them ===========================================/
			for(i=0;i<3;i++){
				$("#reviews_box .rev_box:nth-child("+(i+2)+") .avatar").attr("src","https://graph.facebook.com/"+obj.data[i].reviewer.id+"/picture");
				$("#reviews_box .rev_box:nth-child("+(i+2)+") .rev .name").html(obj.data[i].reviewer.name);
				$("#reviews_box .rev_box:nth-child("+(i+2)+") a").attr("href", "https://www.facebook.com/"+obj.data[i].reviewer.id)
				$("#reviews_box .rev_box:nth-child("+(i+2)+") .rev .vote span").html(obj.data[i].rating);
				$("#reviews_box .rev_box:nth-child("+(i+2)+") .rev .write").html(obj.data[i].review_text);
				$("#reviews_box .rev_box:nth-child("+(i+2)+") .time").html(obj.data[i].created_time);
				var myDate = new Date(Date.parse(obj.data[i].created_time));
				myDate= myDate.toLocaleString();
				$("#reviews_box .rev_box:nth-child("+(i+2)+") .time").html(myDate.substring(0,myDate.length - 3));
			}

		}
	});

});