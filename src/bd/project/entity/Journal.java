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
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.ToString;

@Entity
@Table(name="journals")
@ToString(exclude={"publisherId", "bibUnits"})
@Data
@NoArgsConstructor
public class Journal {


	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="id")
	private int id;
	
	@NonNull
	@ManyToOne(fetch=FetchType.LAZY, cascade= {CascadeType.DETACH,
			CascadeType.MERGE,
			CascadeType.PERSIST,
			CascadeType.REFRESH})
	@JoinColumn(name="publisher_id")
	private Publisher publisherId;
	
	@NonNull
	@Column(name="name")
	private String name;
	
	@Column(name="ISSN")
	private String issn;

	
	@OneToMany(fetch=FetchType.LAZY, mappedBy="journalId", cascade= {CascadeType.DETACH,
			CascadeType.MERGE,
			CascadeType.PERSIST,
			CascadeType.REFRESH})
	private List<BibUnit> bibUnits;
	
	public void addBibUnit(BibUnit bibUnit) {
		if(bibUnits == null)
			bibUnits = new ArrayList<>();
		
		bibUnits.add(bibUnit);
	}
	
	public Journal(String name, String issn) {
		this.name = name;
		this.issn = issn;
	}
	
}
