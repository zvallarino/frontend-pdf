'use client';

import { useState } from 'react';

//note added for understanding
// Mirroring keywords for frontend styling (simplification)
// Ensure this is kept in sync with your backend's keywords.json
const KEYWORDS_CONFIG = {
  "contraception": { "fail_if_found": true },
  "transdermal": { "fail_if_found": true },
  "vaccines": { "fail_if_found": true },
  "activism": { "fail_if_found": true },
  "activists": { "fail_if_found": true },
  "advocacy": { "fail_if_found": true },
  "advocate": { "fail_if_found": true },
  "advocates": { "fail_if_found": true },
  "affirming care": { "fail_if_found": true },
  "all-inclusive": { "fail_if_found": true },
  "allyship": { "fail_if_found": true },
  "anti-racism": { "fail_if_found": true },
  "antiracist": { "fail_if_found": true },
  "assigned at birth": { "fail_if_found": true },
  "assigned female at birth": { "fail_if_found": true },
  "assigned male at birth": { "fail_if_found": true },
  "at risk": { "fail_if_found": true },
  "barrier": { "fail_if_found": true },
  "barriers": { "fail_if_found": true },
  "belong": { "fail_if_found": true },
  "bias": { "fail_if_found": true },
  "biased": { "fail_if_found": true },
  "biased toward": { "fail_if_found": true },
  "biases": { "fail_if_found": true },
  "biases towards": { "fail_if_found": true },
  "biologically female": { "fail_if_found": true },
  "biologically male": { "fail_if_found": true },
  "BIPOC": { "fail_if_found": true },
  "black": { "fail_if_found": true },
  "clean energy": { "fail_if_found": true },
  "climate crisis": { "fail_if_found": true },
  "climate science": { "fail_if_found": true },
  "commercial sex worker": { "fail_if_found": true },
  "community diversity": { "fail_if_found": true },
  "community equity": { "fail_if_found": true },
  "confirmation bias": { "fail_if_found": true },
  "cultural competence": { "fail_if_found": true },
  "cultural differences": { "fail_if_found": true },
  "cultural heritage": { "fail_if_found": true },
  "cultural sensitivity": { "fail_if_found": true },
  "culturally appropriate": { "fail_if_found": true },
  "culturally responsive": { "fail_if_found": true },
  "DEI": { "fail_if_found": true },
  "DEIA": { "fail_if_found": true },
  "DEIAB": { "fail_if_found": true },
  "DEIJ": { "fail_if_found": true },
  "disabilities": { "fail_if_found": true },
  "disability": { "fail_if_found": true },
  "discriminated": { "fail_if_found": true },
  "discrimination": { "fail_if_found": true },
  "discriminatory": { "fail_if_found": true },
  "disparity": { "fail_if_found": true },
  "diverse": { "fail_if_found": true },
  "diverse backgrounds": { "fail_if_found": true },
  "diverse communities": { "fail_if_found": true },
  "diverse community": { "fail_if_found": true },
  "diverse group": { "fail_if_found": true },
  "diverse groups": { "fail_if_found": true },
  "diversified": { "fail_if_found": true },
  "diversify": { "fail_if_found": true },
  "diversifying": { "fail_if_found": true },
  "diversity": { "fail_if_found": true },
  "enhance the diversity": { "fail_if_found": true },
  "enhancing diversity": { "fail_if_found": true },
  "environmental quality": { "fail_if_found": true },
  "equal opportunity": { "fail_if_found": true },
  "equality": { "fail_if_found": true },
  "equitable": { "fail_if_found": true },
  "equitableness": { "fail_if_found": true },
  "equity": { "fail_if_found": true },
  "ethnicity": { "fail_if_found": true },
  "excluded": { "fail_if_found": true },
  "exclusion": { "fail_if_found": true },
  "expression": { "fail_if_found": true },
  "female": { "fail_if_found": true },
  "females": { "fail_if_found": true },
  "feminism": { "fail_if_found": true },
  "fostering inclusivity": { "fail_if_found": true },
  "GBV": { "fail_if_found": true },
  "gender": { "fail_if_found": true },
  "gender based": { "fail_if_found": true },
  "gender based violence": { "fail_if_found": true },
  "gender diversity": { "fail_if_found": true },
  "gender identity": { "fail_if_found": true },
  "gender ideology": { "fail_if_found": true },
  "gender-affirming care": { "fail_if_found": true },
  "genders": { "fail_if_found": true },
  "gulf of mexico": { "fail_if_found": true },
  "hate speech": { "fail_if_found": true },
  "health disparity": { "fail_if_found": true },
  "health equity": { "fail_if_found": true },
  "hispanic minority": { "fail_if_found": true },
  "historically": { "fail_if_found": true },
  "identity": { "fail_if_found": true },
  "immigrants": { "fail_if_found": true },
  "implicit bias": { "fail_if_found": true },
  "implicit biases": { "fail_if_found": true },
  "inclusion": { "fail_if_found": true },
  "inclusive": { "fail_if_found": true },
  "inclusive leadership": { "fail_if_found": true },
  "inclusiveness": { "fail_if_found": true },
  "inclusivity": { "fail_if_found": true },
  "increase diversity": { "fail_if_found": true },
  "increase the diversity": { "fail_if_found": true },
  "indigenous community": { "fail_if_found": true },
  "inequalities": { "fail_if_found": true },
  "inequality": { "fail_if_found": true },
  "inequitable": { "fail_if_found": true },
  "inequities": { "fail_if_found": true },
  "inequity": { "fail_if_found": true },
  "injustice": { "fail_if_found": true },
  "institutional": { "fail_if_found": true },
  "intersectional": { "fail_if_found": true },
  "intersectionality": { "fail_if_found": true },
  "key groups": { "fail_if_found": true },
  "key people": { "fail_if_found": true },
  "key populations": { "fail_if_found": true },
  "Latinx": { "fail_if_found": true },
  "LGBT": { "fail_if_found": true },
  "LGBTQ": { "fail_if_found": true },
  "marginalize": { "fail_if_found": true },
  "marginalized": { "fail_if_found": true },
  "men who have sex with men": { "fail_if_found": true },
  "mental health": { "fail_if_found": true },
  "minorities": { "fail_if_found": true },
  "minority": { "fail_if_found": true },
  "most risk": { "fail_if_found": true },
  "MSM": { "fail_if_found": true },
  "multicultural": { "fail_if_found": true },
  "Mx": { "fail_if_found": true },
  "Native American": { "fail_if_found": true },
  "non-binary": { "fail_if_found": true },
  "nonbinary": { "fail_if_found": true },
  "oppression": { "fail_if_found": true },
  "oppressive": { "fail_if_found": true },
  "orientation": { "fail_if_found": true },
  "people-centered care": { "fail_if_found": true },
  "person-centered": { "fail_if_found": true },
  "person-centered care": { "fail_if_found": true },
  "polarization": { "fail_if_found": true },
  "political": { "fail_if_found": true },
  "pollution": { "fail_if_found": true },
  "pregnant people": { "fail_if_found": true },
  "pregnant person": { "fail_if_found": true },
  "pregnant persons": { "fail_if_found": true },
  "prejudice": { "fail_if_found": true },
  "privilege": { "fail_if_found": true },
  "privileges": { "fail_if_found": true },
  "promote diversity": { "fail_if_found": true },
  "promoting diversity": { "fail_if_found": true },
  "pronoun": { "fail_if_found": true },
  "pronouns": { "fail_if_found": true },
  "prostitute": { "fail_if_found": true },
  "race": { "fail_if_found": true },
  "race and ethnicity": { "fail_if_found": true },
  "racial": { "fail_if_found": true },
  "racial diversity": { "fail_if_found": true },
  "racial identity": { "fail_if_found": true },
  "racial inequality": { "fail_if_found": true },
  "racial justice": { "fail_if_found": true },
  "racially": { "fail_if_found": true },
  "racism": { "fail_if_found": true },
  "segregation": { "fail_if_found": true },
  "sense of belonging": { "fail_if_found": true },
  "sex": { "fail_if_found": true },
  "sexual preferences": { "fail_if_found": true },
  "sexuality": { "fail_if_found": true },
  "social justice": { "fail_if_found": true },
  "sociocultural": { "fail_if_found": true },
  "socioeconomic": { "fail_if_found": true },
  "status": { "fail_if_found": true },
  "stereotype": { "fail_if_found": true },
  "stereotypes": { "fail_if_found": true },
  "systemic": { "fail_if_found": true },
  "systemically": { "fail_if_found": true },
  "they/them": { "fail_if_found": true },
  "trans": { "fail_if_found": true },
  "transgender": { "fail_if_found": true },
  "transsexual": { "fail_if_found": true },
  "trauma": { "fail_if_found": true },
  "traumatic": { "fail_if_found": true },
  "tribal": { "fail_if_found": true },
  "unconscious bias": { "fail_if_found": true },
  "underappreciated": { "fail_if_found": true },
  "underprivileged": { "fail_if_found": true },
  "underrepresentation": { "fail_if_found": true },
  "underrepresented": { "fail_if_found": true },
  "underserved": { "fail_if_found": true },
  "undervalued": { "fail_if_found": true },
  "victim": { "fail_if_found": true },
  "victims": { "fail_if_found": true },
  "vulnerable populations": { "fail_if_found": true },
  "women": { "fail_if_found": true },
  "women and underrepresented": { "fail_if_found": true },
  "breastfeed people/person": { "fail_if_found": true },
  "chestfeed people/person": { "fail_if_found": true },
  "uterus with people/person": { "fail_if_found": true },
};


const API_BASE_URL_DEVELOPMENT = 'http://127.0.0.1:8000/api/v1';
const API_BASE_URL_PRODUCTION = 'https://zvallarino.pythonanywhere.com/api/v1';



export default function HomePage() {
  const [selectedFiles, setSelectedFiles] = useState(null);
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');


    // Determine the API URL based on the environment
    const API_BASE_URL = process.env.NODE_ENV === 'production'
    ? API_BASE_URL_PRODUCTION
    : API_BASE_URL_DEVELOPMENT;

  const API_ENDPOINT = `${API_BASE_URL}/check-document/`;
  

  const handleFileChange = (event) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      for (let i = 0; i < files.length; i++) {
        if (!files[i].name.toLowerCase().endsWith('.pdf') && !files[i].name.toLowerCase().endsWith('.docx')) {
          setError(`File "${files[i].name}" is not a supported type (PDF or DOCX only). Please select again.`);
          setSelectedFiles(null);
          event.target.value = null;
          return;
        }
      }
      setSelectedFiles(files);
      setResults([]);
      setError('');
    } else {
      setSelectedFiles(null);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!selectedFiles || selectedFiles.length === 0) {
      setError('Please select one or more files first.');
      return;
    }

    setIsLoading(true);
    setError('');
    setResults([]);

    const formData = new FormData();
    for (let i = 0; i < selectedFiles.length; i++) {
      formData.append('files', selectedFiles[i]);
    }

    try {
      const response = await fetch(API_ENDPOINT, {
        method: 'POST',
        body: formData,
      });

      setIsLoading(false);

      if (!response.ok) {
        const errData = await response.json().catch(() => ({ detail: 'An unknown error occurred processing the request.' }));
        let errorMessage = `Server error: ${response.status}`;
        if (errData.detail) {
         errorMessage += ` - ${errData.detail}`;
        } else if (errData.files && Array.isArray(errData.files)) {
         errorMessage += ` - ${errData.files.join(', ')}`;
        } else if (typeof errData === 'object') {
         errorMessage += ` - ${JSON.stringify(errData)}`;
        }
        throw new Error(errorMessage);
      }

      const data = await response.json();
      setResults(data);

    } catch (err) {
      setIsLoading(false);
      console.error("Frontend submit error:", err);
      setError(err.message || 'Failed to upload or process the files. Check browser console and backend logs.');
    }
  };

  // Helper to check if any file has any found_instances
  const hasAnyDetailedInstances = results.some(fr => fr.found_instances && fr.found_instances.length > 0);

  return (
    <main className="flex min-h-screen flex-col items-center p-4 md:p-8 bg-slate-100">
      <div className="w-full max-w-4xl bg-white p-6 md:p-8 rounded-xl shadow-xl">
        <h1 className="text-3xl font-bold mb-8 text-center text-slate-700">Document Keyword Scanner</h1>

        {/* --- FORM SECTION --- */}
        <form onSubmit={handleSubmit} className="space-y-6 mb-10">
          <div>
            <label htmlFor="file-upload" className="block text-sm font-medium text-slate-600 mb-1">
              Upload PDF or DOCX Documents (Multiple):
            </label>
            <input
              id="file-upload"
              type="file"
              multiple
              onChange={handleFileChange}
              accept=".pdf,.docx"
              className="block w-full text-sm text-slate-500 border border-slate-300 rounded-lg cursor-pointer bg-slate-50 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-sky-50 file:text-sky-700 hover:file:bg-sky-100"
            />
            {selectedFiles && selectedFiles.length > 0 && (
             <div className="mt-2 text-xs text-slate-500">
               {selectedFiles.length} file(s) selected: {Array.from(selectedFiles).map(f => f.name).join(', ')}
             </div>
            )}
          </div>
          <button
            type="submit"
            disabled={isLoading || !selectedFiles || selectedFiles.length === 0}
            className="w-full bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed transition duration-150 ease-in-out"
          >
            {isLoading ? "loading" : `Submit & Check ${selectedFiles ? selectedFiles.length : 0} File(s)`}
          </button>
        </form>

        {/* --- ERROR DISPLAY --- */}
        {error && (
          <p className="my-6 text-sm text-red-700 bg-red-100 p-3 rounded-md border border-red-300">
            <strong>Error:</strong> {error}
          </p>
        )}

        {/* --- RESULTS SECTION --- */}
        {results && results.length > 0 && (
          <div>
            {/* --- PART 1: FILE-BY-FILE SUMMARIES --- */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-slate-700 mb-6 pb-2 border-b border-slate-300">
                Scan Summaries by File
              </h2>
              <div className="space-y-8">
                {results.map((fileResult, fileIndex) => (
                  <div key={`summary-${fileIndex}`} className="p-4 rounded-lg bg-white shadow"> {/* Individual file summary card */}
                    {/* 1. File Title */}
                    <h3 className="text-lg font-semibold text-sky-700 mb-2">
                      File: <span className="font-mono break-all">{fileResult.filename}</span>
                    </h3>

                    {/* 2. Scan Status */}
                    <div className="flex items-center mb-3">
                      <h4 className="text-md font-medium text-slate-600 mr-2">
                        Status:
                      </h4>
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 text-sm font-semibold rounded-full ${
                          fileResult.status === 'fail' ? 'bg-red-100 text-red-700' :
                          fileResult.status === 'pass' ? 'bg-green-100 text-green-700' :
                          'bg-yellow-100 text-yellow-700' // For 'error' status
                        }`}
                      >
                        {fileResult.status.toUpperCase()}
                      </span>
                    </div>

                    {fileResult.status === 'error' && fileResult.error_message && (
                     <p className="text-xs text-red-600 bg-red-50 p-2 rounded">
                         Processing Error: {fileResult.error_message}
                     </p>
                    )}

                    {/* 3. Failure Details (if status is FAIL for this file) */}
                    {fileResult.status === 'fail' && fileResult.fail_summary && fileResult.fail_summary.length > 0 && (
                      <div className="mt-2 p-3 bg-red-50 border border-red-200 rounded-md">
                        <h5 className="text-sm font-semibold text-red-700 mb-1">Failure Details:</h5>
                        <ul className="space-y-0.5 list-disc list-inside pl-1">
                          {fileResult.fail_summary.map((summaryItem, summaryIndex) => (
                            <li key={summaryIndex} className="text-xs text-red-600">
                              <span className="font-bold">{summaryItem.keyword}</span> found{' '}
                              <span className="font-bold">{summaryItem.count}</span> time(s) on page(s):{' '}
                              <span className="font-bold">{summaryItem.pages.join(', ')}</span>.
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {/* Message if file passed AND no keyword instances were found from WORDS_TO_CHECK */}
                    {fileResult.status === 'pass' && (!fileResult.found_instances || fileResult.found_instances.length === 0) && (
                        <p className="text-xs text-slate-500 mt-2 p-2 bg-slate-50 rounded">
                            No target keywords (from your list) were found in this document.
                        </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* --- PART 2: CONSOLIDATED LIST OF ALL KEYWORD INSTANCES --- */}
            {hasAnyDetailedInstances && (
              <div className="pt-8 border-t border-slate-400">
                <h2 className="text-2xl font-bold text-slate-700 mb-6 pb-2 border-b border-slate-300">
                  Detailed Keyword Instances (All Files)
                </h2>
                <div className="bg-slate-50 p-4 rounded-md shadow-inner">
                  <ul className="space-y-4">
                    {results.map((fileResult) =>
                      fileResult.found_instances && fileResult.found_instances.map((instance, instanceIndex) => (
                        <li key={`${fileResult.filename}-${instanceIndex}`} className="text-sm text-slate-700 p-3 bg-white rounded shadow-sm border border-slate-200">
                          <div className="font-semibold text-md text-sky-700 mb-1.5">
                            From File: <span className="font-mono break-all">{fileResult.filename}</span>
                          </div>
                          <div className="font-medium text-slate-800">
                            <span className="font-semibold">
                              {fileResult.filename.toLowerCase().endsWith('.docx') ? 'Location in Document:' : 'Page:'}
                            </span> {instance.page}
                          </div>
                          <div className="mt-1">
                            <span className="font-semibold">Word:</span>{' '}
                            <span className={KEYWORDS_CONFIG[instance.word]?.fail_if_found ? "text-red-600 font-bold" : "text-orange-600 font-semibold"}>{instance.word}</span>
                            {' '}(matched: <span className="italic">&quot;{instance.original_match}&quot;</span>)
                            </div>
                          <div className="mt-1 text-slate-600">
                          <span className="font-semibold">Context:</span> &quot;{instance.phrase}&quot;
                          </div>
                        </li>
                      ))
                    )}
                  </ul>
                </div>
              </div>
            )}
            {!hasAnyDetailedInstances && results.length > 0 && (
                 <div className="pt-8 border-t border-slate-400">
                    <p className="text-slate-600 text-center p-4 bg-slate-100 rounded-md">
                        No keyword instances found across any of the processed files.
                    </p>
                 </div>
            )}
          </div>
        )}
      </div>
    </main>
  );
}