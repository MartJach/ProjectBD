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
@Table(name="citations")
@ToString(exclude={"unitCiting", "unitCited"})
@Data
@NoArgsConstructor
public class Citation {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="id")
	private int id;
	
	@NonNull
	@Column(name="type")
	private String type;
	
	@NonNull
	@ManyToOne(fetch=FetchType.LAZY, cascade= {CascadeType.DETACH,
			CascadeType.MERGE,
			CascadeType.PERSIST,
			CascadeType.REFRESH})
	@JoinColumn(name="unit_citing")
	private BibUnit unitCiting;
	
	@NonNull
	@ManyToOne(fetch=FetchType.LAZY, cascade= {CascadeType.DETACH,
			CascadeType.MERGE,
			CascadeType.PERSIST,
			CascadeType.REFRESH})
	@JoinColumn(name="unit_cited")
	private BibUnit unitCited;
	
	// TODO check if this is needed, or not (same as id??)
	//@NonNull
	@Column(name="no")
	private int no;
	
	@NonNull
	@Column(name="original_text")
	private String originalText;

	public Citation(String type, int no, String originalText) {
		this.type = type;
		this.no = no;
		this.originalText = originalText;
	}
		
}
