$(function(){	
	$('#inputBox form').submit(function(){
		$.ajax({
			url: 'register.jsp',
			type: 'post',
			data: $(this).serialize(),
			dataType: 'json',
			success: function(data){
				let html = '<div class="writing">';
				html += '<h3 class="title">' + data.title + '</h3>';
				html += '<div class="writer">' + data.writer + '</div>';
				html += '<div class="content">' + data.content + '</div>';
				html += '</div>';
				
				$('.list').append(html);
				
				$('#writer').val("");
				$('#title').val("");
				$('#content').val("");
			}
		});

		return false;
	});
	
	$.ajax({
		url: 'post.json',
		dataType: 'json',
		success: function(data){
			$.each(data, function(index, item){
				let html = '<div class="writing">';
				html += '<h3 class="title">' + item.title + '</h3>';
				html += '<div class="writer">' + item.writer + '</div>';
				html += '<div class="content">' + item.content + '</div>';
				html += '</div>';
			
				$('.list').append(html);
			});
		}
	});
});