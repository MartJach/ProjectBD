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
import lombok.NonNull;
import lombok.ToString;

@Entity
@Table(name="institutions")
@ToString(exclude={"publishers", "responsibilities"})
@Data
@NoArgsConstructor
public class Institution {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="id")
	private int id;
	
	@Column(name="name")
	@NonNull
	private String name;
	
	@OneToMany(fetch=FetchType.LAZY,mappedBy="institutionId", cascade= {CascadeType.DETACH,
			CascadeType.MERGE,
			CascadeType.PERSIST,
			CascadeType.REFRESH})
	private List<Publisher> publishers;
	
	@OneToMany(fetch=FetchType.LAZY,mappedBy="affiliation", cascade= {CascadeType.DETACH,
			CascadeType.MERGE,
			CascadeType.PERSIST,
			CascadeType.REFRESH})
	private List<Responsibility> responsibilities;
	
	public void addResponsibility(Responsibility responsibility) {
		if(responsibilities == null) 
			responsibilities = new ArrayList<>();
		
		responsibilities.add(responsibility);
	}
	
	public void addPublisher(Publisher publisher) {
		if(publishers == null) 
			publishers = new ArrayList<>();
		
		publishers.add(publisher);
	}

	public Institution(String name) {
		this.name = name;
	}
	
}
