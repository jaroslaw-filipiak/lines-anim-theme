<?php
	$wnetrza = get_field('wnetrze');
	
	?>
	<div class="wnetrze">
		<?php foreach ($wnetrza as $w) { ?>
		<?php if ($w['n_img_2']){?>
			<div class="wn_box wn_box2">
		<?php } else { ?>
			<div class="wn_box">
		<?php } ?>
				<p class="wn_title"><?php echo $w['n_title'] ; ?></p>
				<div class="wn_img">
					<img src="<?php echo $w['n_img']['url'] ; ?>" alt="<?php echo $w['n_img']['name'] ; ?>" />
					<?php if ($w['n_img_2']){?>
					<img src="<?php echo $w['n_img_2']['url'] ; ?>" alt="<?php echo $w['n_img_2']['name'] ; ?>" />
					<?php } ?>
				</div>
				
			</div>
		<?php } ?>
	</div>