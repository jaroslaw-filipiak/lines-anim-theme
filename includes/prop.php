<?php
	$prop = get_field('prop');
	
	?>
	<div class="wnetrze">
		<?php foreach ($prop as $pr) { ?>
		<?php if ($pr['n_img_2']){?>
			<div class="wn_box wn_box2">
		<?php } else { ?>
			<div class="wn_box">
		<?php } ?>
				<div class="wn_img">
					<img src="<?php echo $pr['n_img']['url'] ; ?>" alt="<?php echo $pr['n_img']['name'] ; ?>" />
					<?php if ($pr['n_img_2']){?>
					<img src="<?php echo $pr['n_img_2']['url'] ; ?>" alt="<?php echo $pr['n_img_2']['name'] ; ?>" />
					<?php } ?>
				</div>
				
			</div>
		<?php } ?>
	</div>