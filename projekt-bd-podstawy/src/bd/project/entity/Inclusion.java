package bd.project.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="inclusions")
@Data
@NoArgsConstructor
public class Inclusion {

	// TODO check if it's many-to-many mapping (bib_unit-bib_unit)
	
	
	@Column(name="unit_includingn")
	private int unitIncluding;
	
	@Column(name="unit_included")
	private int unitIncluded;
}
