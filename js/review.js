$(window).ready(function () {

	var i, j, rating = 0, num_rev, date, pos = 0;

	$.ajax({
		url: "json/db.json",
		dataType: "json",
		error: function () {
			$("#reviews_box").hide();
		},
		success: function (obj) {

			num_rev = obj.data.length;

			console.log(num_rev);

			for (i = 0; i < num_rev; i++) {
				if (obj.data[i].review_text != "" && obj.data[i].review_text != null && obj.data[i].rating > 3) {
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
	});
});