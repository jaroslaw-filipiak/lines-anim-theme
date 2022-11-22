<?php
	$pp = get_field('pp');
	
	?>
	<div class="wnetrze">
		<?php foreach ($pp as $p) { ?>
		<?php if ($p['n_img_2']){?>
			<div class="wn_box wn_box2">
		<?php } else { ?>
			<div class="wn_box">
		<?php } ?>
				<div class="wn_img">
					<img src="<?php echo $p['n_img']['url'] ; ?>" alt="<?php echo $p['n_img']['name'] ; ?>" />
					<?php if ($p['n_img_2']){?>
					<img src="<?php echo $p['n_img_2']['url'] ; ?>" alt="<?php echo $p['n_img_2']['name'] ; ?>" />
					<?php } ?>
				</div>
				
			</div>
		<?php } ?>
	</div>