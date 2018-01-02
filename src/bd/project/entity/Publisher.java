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
@Table(name="publishers")
@ToString(exclude={"institutionId", "bibUnits", "journals"})
@Data
@NoArgsConstructor
public class Publisher {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="id")
	private int id;
	
	@NonNull
	@Column(name="name")
	private String name;
	
	@ManyToOne(fetch=FetchType.LAZY, cascade= {CascadeType.DETACH,
			CascadeType.MERGE,
			CascadeType.PERSIST,
			CascadeType.REFRESH})
	@JoinColumn(name="institution_id")
	private Institution institutionId;
	
	
	@OneToMany(fetch=FetchType.LAZY, mappedBy="publisherId", cascade= {CascadeType.DETACH,
			CascadeType.MERGE,
			CascadeType.PERSIST,
			CascadeType.REFRESH})
	private List<BibUnit> bibUnits;
	
	@OneToMany(fetch=FetchType.LAZY, mappedBy="publisherId", cascade= {CascadeType.DETACH,
			CascadeType.MERGE,
			CascadeType.PERSIST,
			CascadeType.REFRESH})
	private List<Journal> journals;
	
	public void addJournal(Journal journal) {
		if(journals == null)
			journals = new ArrayList<>();
		
		journals.add(journal);
	}

	public void addBibUnit(BibUnit bibUnit) {
		if(bibUnits == null)
			bibUnits = new ArrayList<>();
		
		bibUnits.add(bibUnit);
	}	
	
	public Publisher(String name) {
		this.name = name;
	}
}
