var documenterSearchIndex = {"docs":
[{"location":"estimate_subglobal/#Reference","page":"Subglobal SA","title":"Reference","text":"","category":"section"},{"location":"estimate_subglobal/","page":"Subglobal SA","title":"Subglobal SA","text":"Pages = [\"estimate_subglobal.md\",]","category":"page"},{"location":"estimate_subglobal/","page":"Subglobal SA","title":"Subglobal SA","text":"estimate_subglobal_sobol_indices\nfit_distributions","category":"page"},{"location":"estimate_subglobal/#SubglobalSensitivityAnalysis.estimate_subglobal_sobol_indices","page":"Subglobal SA","title":"SubglobalSensitivityAnalysis.estimate_subglobal_sobol_indices","text":"estimate_subglobal_sobol_indices(f, parmsModeUpperRows, p0; \n    n_sample = 500, δ_cp = 0.1, names_opt, targets)\n\nEstimate the Sobol sensitivity indices for a subspace of the global space around parameter vector p0.\n\nThe subspace to sample is determined by an area in the cumulative probability function, specifically for parameter i: cdf(p0) ± δ_cp. Samples are drawn from this cdf-scale and converted back to quantiles at the parameter scale.\n\nSobol indices are estimated using the method of Touati (2016), which has a total cost of (p+2)n, where p is the number of parameters and n is the number of samples in each of the two random parameter samples.\n\nArguments\n\nf: a function to compute a set of results, whose sensitivity is to be inspected, from parametes (p1, p2, ...) -> NamedTuple{NTuple{N,NT}} where NT <: Number,  for example fsens = (a,b) -> (;target1 = a + b -1, target2 = a + b -0.5).\nparmsModeUpperRows: a Vector of Tuples of the form  (:par_name, Distribution, mode, 95%_quantile) where Distribution is a non-parameterized Object from Distributions.jl such as LogNormal. Alternatively, the argument can be the result of fit_distributions\np0: the parameter around which the samples are drawn.\n\nOptional\n\nn_sample = 500: the number of parameter-vectors in each of the samples  used by the sensitivity method.\nδ_cp = 0.1: the range around cdf(p0_i) to sample.\nmin_quant=0.005 and max_quant=0.995: to constrain the range of  cumulative probabilities when parameters are near the ends of the distribution.\ntargets: a NTuple{Symbol} of subset of the outputs of f, to constrain the  computation to specific outputs.\nnames_opt: a NTuple{Symbol} of subset of the parameters given with parmsModeUpperRows\n\nReturn value\n\nA DataFrame with columns\n\npar: parameter name \nindex: which one of the SOBOL-indices, :first_order or :total\nvalue: the estimate\ncf95_lower and cf95_upper: estimates of the 95% confidence interval\ntarget: the result, for which the sensitivity has been computed\n\n\n\n\n\n","category":"function"},{"location":"estimate_subglobal/#SubglobalSensitivityAnalysis.fit_distributions","page":"Subglobal SA","title":"SubglobalSensitivityAnalysis.fit_distributions","text":"fit_distributions(tups)\nfit_distributions!(df)\n\nFor each row, fit a distribution of type dType to mode and upper quantile.\n\nIn the first variant, parameters are specified as a vector of tuples, which are  converted to a DataFrame. A new column :dist with a concrete Distribution is added. The second variant modifies a DataFrame with corresponding input columns.\n\n\n\n\n\n","category":"function"},{"location":"install_R_dependencies/#Reference","page":"R dependencies","title":"Reference","text":"","category":"section"},{"location":"install_R_dependencies/","page":"R dependencies","title":"R dependencies","text":"Pages = [\"install_R_dependencies.md\",]","category":"page"},{"location":"install_R_dependencies/","page":"R dependencies","title":"R dependencies","text":"install_R_dependencies","category":"page"},{"location":"install_R_dependencies/#SubglobalSensitivityAnalysis.install_R_dependencies","page":"R dependencies","title":"SubglobalSensitivityAnalysis.install_R_dependencies","text":"install_R_dependencies(packages; lib)\n\nInstall R packages, vector packages, into R library, lib. The lib directory is created, if it does not exist yet, and prepended to the R library path.  lib defaults to the user R-library. \n\nCAUTION: Installing packages to the R user library may interfere with other R projects, because it changes from where libraries and its versions are loaded.\n\nAlternatively, install into a R-session specific library path, by using lib = RCall.rcopy(R\"file.path(tempdir(),'session-library')\"). This does not intefere, but needs to be re-done on each new start of R, and needs  adding RCall.jl to users project dependencies and imports.\n\n\n\n\n\n","category":"function"},{"location":"","page":"Home","title":"Home","text":"CurrentModule = SubglobalSensitivityAnalysis","category":"page"},{"location":"#SubglobalSensitivityAnalysis","page":"Home","title":"SubglobalSensitivityAnalysis","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Documentation for package  SubglobalSensitivityAnalysis.jl.","category":"page"},{"location":"","page":"Home","title":"Home","text":"Estimating Sobol sensitivity indices for a subspace of the global space  around a parameter vector p0.","category":"page"},{"location":"#Problem","page":"Home","title":"Problem","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Results of global sensitivity analysis (SA) are sometimes strongly influenced by outliers resulting from unreasonable parameter combinations.","category":"page"},{"location":"","page":"Home","title":"Home","text":"The idea is to still apply global SA, but only to a subset of the entire possible parameter region around a reasonable parameter set.","category":"page"},{"location":"","page":"Home","title":"Home","text":"The user specifies a probability distribution function of each parameter, and the subglobal method ensures that a parameter range is sampled, so that a given proportion (default %20) under its prior pdf is covered.","category":"page"},{"location":"","page":"Home","title":"Home","text":"This ensures that for a parameter with wide distribution also a wide range is sampled, and that more samples are drawn where the prior probability of the parameter is higher.","category":"page"},{"location":"#How","page":"Home","title":"How","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Setup arguments and call the main function estimate_subglobal_sobol_indices, as described in the example doctest.","category":"page"}]
}
