	$(document).ready(function(){
		var tpCoachContent = document.querySelector('template').content;
		var tpCoachPortrait = tpCoachContent.querySelector('#tpCoachPortrait');
		var tpCoachName = tpCoachContent.querySelector('#tpCoachName');
		var tpCoachType = tpCoachContent.querySelector('#tpCoachType');
		var tpCoachBottomDivision = tpCoachContent.querySelector('#tpCoachBottomDivision');
		var tpCoachPrice = tpCoachContent.querySelector('#tpCoachPrice');
		$.get('http://123.57.210.52:80/api/v1/coaches.json',{token:'s6PnbxTVKzgqcZDe03EdWg',club_uuid:'1e173f24-49b5-46fe-a384-73364b72a5ae'},function(data){
			
			$.each(data.featured, function(i){
				tpCoachPortrait.src = data.featured[i].portrait;
				tpCoachName.textContent = data.featured[i].name;
				tpCoachType.textContent = data.featured[i].title;
				tpCoachBottomDivision.textContent = data.featured[i].description;
				tpCoachPrice.textContent = data.featured[i].starting_price;
				document.querySelector('#tpCoachContainer').appendChild(document.importNode(tpCoachContent,true));
			})
			
			$.each(data.normal, function(i){
				tpCoachPortrait.src = data.normal[i].portrait;
				tpCoachName.textContent = data.normal[i].name;
				tpCoachType.textContent = data.normal[i].title;
				tpCoachBottomDivision.textContent = data.normal[i].description;
				tpCoachPrice.textContent = data.normal[i].starting_price;
				document.querySelector('#tpCoachContainer').appendChild(document.importNode(tpCoachContent,true));
			})
		})		
	})
