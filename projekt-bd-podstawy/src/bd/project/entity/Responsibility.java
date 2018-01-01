package bd.project.entity;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.ToString;

@Entity
@Table(name="responsibilities")
@ToString(exclude= {"unitId", "personId", "affiliation"})
@Data
@NoArgsConstructor
public class Responsibility {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="id")
	private int id;
	
	@NonNull
	@Column(name="type")
	private String type;
	
	@ManyToOne(fetch=FetchType.LAZY, cascade= {CascadeType.DETACH,
												CascadeType.MERGE,
												CascadeType.PERSIST,
												CascadeType.REFRESH})
	@JoinColumn(name="unit_id")
	private int unitId;
	
	@ManyToOne(fetch=FetchType.LAZY, cascade= {CascadeType.DETACH,
												CascadeType.MERGE,
												CascadeType.PERSIST,	
												CascadeType.REFRESH})
	@JoinColumn(name="person_id")
	private int personId;
	
	@NonNull
	@Column(name="orig_surname")
	private String origSurname;
	
	@Column(name="orig_name")
	private String origName;
	
	@Column(name="orig_name2")
	private String origName2;
	
	@ManyToOne(fetch=FetchType.LAZY, cascade= {CascadeType.DETACH,
												CascadeType.MERGE,
												CascadeType.PERSIST,
												CascadeType.REFRESH})
	@JoinColumn(name="affilation")
	private int affiliation;

	public Responsibility(String type, String origSurname, String origName, String origName2) {
		this.type = type;
		this.origSurname = origSurname;
		this.origName = origName;
		this.origName2 = origName2;
	}	
	
}
