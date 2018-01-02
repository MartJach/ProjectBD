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
@Table(name="bib_units")
@ToString(exclude={"publisherId", "journalId"})
@Data
@NoArgsConstructor
public class BibUnit {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="id")
	private int id;
	
	@Column(name="bib_type")
	@NonNull
	private String bibType;
	
	@ManyToOne(fetch=FetchType.LAZY, cascade= {CascadeType.DETACH,
			CascadeType.MERGE,
			CascadeType.PERSIST,
			CascadeType.REFRESH})
	@JoinColumn(name="publisher_id")
	private Publisher publisherId;
	
	@ManyToOne(fetch=FetchType.LAZY, cascade= {CascadeType.DETACH,
			CascadeType.MERGE,
			CascadeType.PERSIST,
			CascadeType.REFRESH})
	@JoinColumn(name="journal_id")
	private Journal journalId;
	
	@Column(name="ISBN")
	private String isbn;
	
	@Column(name="DOI")
	private String doi;
	
	@Column(name="title")
	private String title;
	
	@Column(name="pp_from")
	private int ppFrom;
	
	@Column(name="pp_to")
	private int ppTo;
	
	@Column(name="year")
	private int year;
	
	@Column(name="vol")
	private int vol;
	
	@Column(name="issue")
	private int issue;
	
	@OneToMany(fetch=FetchType.LAZY,mappedBy="unitId", cascade= {CascadeType.DETACH,
			CascadeType.MERGE,
			CascadeType.PERSIST,
			CascadeType.REFRESH})
	private List<Responsibility> responsibilities;
	
	@OneToMany(fetch=FetchType.LAZY,mappedBy="unitCited", cascade= {CascadeType.DETACH,
			CascadeType.MERGE,
			CascadeType.PERSIST,
			CascadeType.REFRESH})
	private List<Citation> cited;
	
	@OneToMany(fetch=FetchType.LAZY,mappedBy="unitCiting", cascade= {CascadeType.DETACH,
			CascadeType.MERGE,
			CascadeType.PERSIST,
			CascadeType.REFRESH})
	private List<Citation> citing;
	
	public void addCited(Citation citation) {
		if(cited == null)
			cited = new ArrayList<>();
		
		cited.add(citation);
	}
	
	public void addCiting(Citation citation) {
		if(citing == null)
			citing = new ArrayList<>();
		
		citing.add(citation);
	}
	
	public void addResponsibility(Responsibility responsibility) {
		if(responsibilities == null) 
			responsibilities = new ArrayList<>();
		
		responsibilities.add(responsibility);
	}

	public BibUnit(String bibType, String isbn, String doi, String title, int ppFrom,
			int ppTo, int year, int vol, int issue) {
		this.bibType = bibType;
		this.isbn = isbn;
		this.doi = doi;
		this.title = title;
		this.ppFrom = ppFrom;
		this.ppTo = ppTo;
		this.year = year;
		this.vol = vol;
		this.issue = issue;
	}	
	
}
