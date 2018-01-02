package bd.project.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Table(name="persons")
@ToString(exclude={"responsibilities"})
@Data
@NoArgsConstructor
public class Person {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="id")
	private int id;
	
	@Column(name="surname")
	private String surname;
	
	@Column(name="name")
	private String name;
	
	@Column(name="name2")
	private String name2;
	
	@Column(name="ORCID")
	private String orcid;
	
	@OneToMany(fetch=FetchType.LAZY,mappedBy="personId", cascade= {CascadeType.DETACH,
			CascadeType.MERGE,
			CascadeType.PERSIST,
			CascadeType.REFRESH})
	private List<Responsibility> responsibilities;
	
	public void addResponsibility(Responsibility responsibility) {
		if(responsibilities == null) 
			responsibilities = new ArrayList<>();
		
		responsibilities.add(responsibility);
	}

	public Person(String surname, String name, String name2, String orcid) {
		this.surname = surname;
		this.name = name;
		this.name2 = name2;
		this.orcid = orcid;
	}
	
}
